import { Link } from "react-router-dom";
import BHRDiagram from "../components/BHRDiagram";
import BHRFleetDiagram from "../components/BHRFleetDiagram";

const sectionGap = "2rem";

const h2Style: React.CSSProperties = {
  fontSize: "0.95rem",
  fontWeight: 500,
  color: "var(--text)",
  marginBottom: "0.75rem",
};

const pStyle: React.CSSProperties = {
  fontSize: "0.875rem",
  color: "var(--text-muted)",
  lineHeight: 1.65,
  marginBottom: "0.75rem",
};

export default function BlackHorseReserve() {
  return (
    <div>
      <Link
        to="/projects"
        style={{
          fontSize: "0.8rem",
          color: "var(--text-muted)",
          textDecoration: "none",
          transition: "color 0.15s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
        onMouseLeave={(e) =>
          (e.currentTarget.style.color = "var(--text-muted)")
        }
      >
        ← Projects
      </Link>

      <h1
        style={{
          fontSize: "1.1rem",
          fontWeight: 500,
          marginTop: "1.5rem",
          marginBottom: "0.25rem",
        }}
      >
        Black Horse Reserve
      </h1>
      <p
        style={{
          fontSize: "0.8rem",
          color: "var(--text-muted)",
          marginBottom: sectionGap,
        }}
      >
        2025 – 2026 · React, TypeScript, FastAPI, Supabase, AWS EC2, CloudFront
      </p>

      {/* Background */}
      <section style={{ marginBottom: sectionGap }}>
        <h2 style={h2Style}>Background</h2>
        <p style={pStyle}>
          Some restaurants in NYC are nearly impossible to book. Places on Resy
          release their tables at specific times, and getting a reservation means
          competing with thousands of people clicking at the exact same moment.
          If you're a second late, the table is gone.
        </p>
        <p style={pStyle}>
          I started building Black Horse Reserve to solve this problem for
          myself and a small group of friends. The goal was a system that could
          react faster than any human and learn each restaurant's release
          patterns over time.
        </p>
      </section>

      {/* What it does */}
      <section style={{ marginBottom: sectionGap }}>
        <h2 style={h2Style}>What it does</h2>
        <p style={pStyle}>
          The system operates in two modes. Scouts observe when restaurants drop
          their tables, querying Resy's public availability API and tracking
          patterns over time. This builds a historical picture of each
          restaurant's release schedule. Snipers use that intelligence to
          execute bookings the instant slots appear.
        </p>
        <p style={pStyle}>
          Users interact through an invite-only web app where they can browse
          restaurants, view scouted availability patterns, and submit booking
          requests. The whole thing runs on AWS with fleets of EC2 workers
          coordinated by a central orchestrator.
        </p>
      </section>

      {/* Architecture */}
      <section style={{ marginBottom: sectionGap }}>
        <h2 style={h2Style}>Architecture</h2>
        <p style={pStyle}>
          The system has four main components. The frontend is a React SPA
          hosted on S3 behind CloudFront. All user-facing state lives in
          Supabase, which handles authentication, stores restaurant metadata,
          tracks booking requests, and runs edge functions for invite
          management. The Manager is a FastAPI service on EC2 that acts as the
          central orchestrator, polling Supabase every 20 seconds for new
          requests, managing scheduling via APScheduler, and launching worker
          fleets at execution time.
        </p>
        <BHRDiagram />
        <p style={pStyle}>
          When a user submits a booking request, it flows into Supabase where
          the Manager picks it up on its next poll cycle. The Manager validates
          the request, resolves timing from scouted patterns, and creates a
          local schedule. At the appointed time, it launches a fleet of EC2
          instances via SSH. Scout fleets observe slot availability. Sniper
          fleets execute the booking flow. Results flow back through the Manager
          into Supabase, where the frontend reads them in real time.
        </p>
        <p style={pStyle}>
          Inside each fleet, workers take turns polling Resy for slot
          availability, rotating every ~100 calls so no single IP gets rate
          limited. The moment one worker detects an open slot, all workers
          switch into race mode and fire booking requests simultaneously. First
          successful reservation wins.
        </p>
        <p style={pStyle}>
          The hardest part of this project was getting past Resy's bot detection
          system. Standard HTTP clients get blocked immediately. Solving that
          required one specific technical trick that I'll keep to myself.
        </p>
        <BHRFleetDiagram />
      </section>

      {/* Key technical decisions */}
      <section style={{ marginBottom: sectionGap }}>
        <h2 style={h2Style}>Key technical decisions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            {
              decision: "Ephemeral EC2 fleet instead of a single host",
              why: "Requests run from AWS rather than a local machine, which cuts round-trip latency to Resy roughly in half. The bigger reason is rate limiting: a single IP can only make a limited number of requests before it gets throttled, so the work is spread across a fleet of short-lived instances. More instances means more IPs and more parallelism, and the fleet tears down once a run completes. The cost is orchestration — launching, deploying to, and terminating instances on every run, plus staying under AWS instance quotas.",
            },
            {
              decision: "Postgres as the work queue",
              why: "The frontend writes booking requests as rows in Supabase. The manager polls every few seconds and atomically claims pending rows. There's no SQS or Redis in the path. Polling adds a few seconds of latency before a request is picked up, but that doesn't matter here: claiming a request only schedules it. The actual booking fires at a precise drop time, independent of when it was polled. Keeping the queue in the database it already depends on avoids a second piece of infrastructure and keeps everything observable in one place.",
            },
            {
              decision: "Local SQLite for scheduling",
              why: "The manager runs booking jobs off a local SQLite database and mirrors their status back to Supabase for the frontend to read. Keeping the schedule local means a brief Supabase outage can't delay or drop a time-sensitive job. It still fires on time. The trade-off is keeping the two stores in sync.",
            },
            {
              decision: "Quota enforced in the database, not the client",
              why: "Each user gets a fixed number of booking attempts per month. The limit is enforced through Postgres row-level security at insert time, so it holds regardless of what the client does. Hitting the API directly can't get around it. The downside is that some logic lives in SQL policies rather than application code, which is less visible and needs to be documented well.",
            },
          ].map(({ decision, why }) => (
            <div key={decision}>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text)",
                  fontWeight: 500,
                  marginBottom: "0.25rem",
                }}
              >
                {decision}
              </p>
              <p style={{ ...pStyle, marginBottom: 0 }}>{why}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
