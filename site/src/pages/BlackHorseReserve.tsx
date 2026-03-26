import { Link } from "react-router-dom";
import BHRDiagram from "../components/BHRDiagram";

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
      </section>

      {/* Key technical decisions */}
      <section style={{ marginBottom: sectionGap }}>
        <h2 style={h2Style}>Key technical decisions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            {
              decision: "EC2 fleet instead of running locally",
              why: "AWS data centers give roughly 70ms latency to Resy's servers compared to about 180ms from a home connection. Each worker IP can handle 120 to 220 clean requests before needing to cycle, so a fleet of instances provides both speed and resilience. When milliseconds determine whether you get the table, that gap matters.",
            },
            {
              decision: "Dual database: Supabase + local SQLite",
              why: "Supabase handles all shared state between the frontend and backend. But scheduling is mission-critical. If Supabase has a momentary outage, I can't afford to miss a booking window. The Manager keeps its own SQLite database for active schedules and job execution records. If the network drops, scheduled jobs still fire on time.",
            },
            {
              decision: "Monthly snipe quotas enforced at the database level",
              why: "Each user gets a fixed number of booking attempts per month. The quota is enforced through RLS policies and a centralized config table in Supabase, so it can't be bypassed from the client. This keeps resource usage manageable and EC2 costs predictable.",
            },
            {
              decision: "CloudWatch for observability across ephemeral fleets",
              why: "Every worker in every fleet logs to CloudWatch, giving centralized visibility across instances that spin up and tear down dynamically. Without this, debugging a failed booking attempt across a fleet of short-lived EC2 instances would be nearly impossible.",
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
