import { Link } from "react-router-dom";
import SpectrumDiagram from "../components/SpectrumDiagram";
import { useRef } from "react";

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

const captionStyle: React.CSSProperties = {
  fontSize: "0.75rem",
  color: "var(--text-muted)",
  marginTop: "0.5rem",
  lineHeight: 1.5,
};

function VideoDemo({
  title,
  src,
  caption,
}: {
  title: string;
  src: string;
  caption: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <h3
        style={{
          fontSize: "0.85rem",
          fontWeight: 500,
          color: "var(--text)",
          marginBottom: "0.5rem",
        }}
      >
        {title}
      </h3>
      <video
        ref={(el) => {
          if (el) el.playbackRate = 2.0;
        }}
        autoPlay
        loop
        muted
        playsInline
        controls
        preload="auto"
        style={{
          width: "100%",
          borderRadius: 6,
          border: "1px solid var(--border)",
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
      <p style={captionStyle}>{caption}</p>
    </div>
  );
}

export default function SpectrumAnalytics() {
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
        Spectrum News Analytics App
      </h1>
      <p
        style={{
          fontSize: "0.8rem",
          color: "var(--text-muted)",
          marginBottom: sectionGap,
        }}
      >
        2024 – present · React, TypeScript, FastAPI, PostgreSQL, Redshift, AWS
      </p>

      <p
        style={{
          fontSize: "0.8rem",
          color: "var(--text-muted)",
          fontStyle: "italic",
          marginBottom: sectionGap,
          borderLeft: "2px solid var(--border)",
          paddingLeft: "0.75rem",
        }}
      >
        I've obtained permission to share details of this project but have taken
        care to remove sensitive information.{" "}
        <a
          href="https://github.com/JackDriscoll13/sn_reporting_app-frontend_expo"
          target="_blank"
          rel="noopener noreferrer"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          Frontend code
        </a>
        {" · "}
        <a
          href="https://github.com/JackDriscoll13/sn_reporting_app-backend_expo"
          target="_blank"
          rel="noopener noreferrer"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          Backend code
        </a>
      </p>

      {/* Background */}
      <section style={{ marginBottom: sectionGap }}>
        <h2 style={h2Style}>Background</h2>
        <p style={pStyle}>
          Spectrum News is a cable news product that serves as a retention tool
          for Spectrum customers. Its performance, along with that of its
          competitors, is closely tracked by analysts and executives across
          Charter's 2,000-person Spectrum News business unit.
        </p>
        <p style={pStyle}>
          The analyst team was using Alteryx and Excel to run recurring
          reports. They were spending a lot of time on work that could be
          automated and dealing with data quality issues across multiple sources
          that were hard to reconcile manually.
        </p>
      </section>

      {/* What I built */}
      <section style={{ marginBottom: sectionGap }}>
        <h2 style={h2Style}>What I built</h2>
        <p style={pStyle}>
          Over six months, I designed and built a full-stack analytics platform
          in an isolated AWS environment. The goal was to centralize viewership
          data from multiple sources into a single system with automated
          pipelines, validated data, and a dashboard that non-technical users
          could actually use.
        </p>
      </section>

      {/* Architecture */}
      <section style={{ marginBottom: sectionGap }}>
        <h2 style={h2Style}>Architecture</h2>
        <p style={pStyle}>
          Data flows from three sources on the left into an Airflow orchestration
          server that runs daily, weekly, and monthly batch loads into a
          PostgreSQL database inside our VPC. A FastAPI backend serves processed
          data to a React frontend, with Caddy handling TLS and reverse proxying.
        </p>
        <SpectrumDiagram />
        <p style={pStyle}>
          By owning the full pipeline from source to presentation, we could
          validate data at every step and catch upstream quality issues before
          they reached stakeholders. The orchestration layer handles the
          complexity of pulling from Redshift, on-prem Hadoop, and third-party
          Nielsen feeds on different schedules.
        </p>
      </section>

      {/* Key decisions */}
      <section style={{ marginBottom: sectionGap }}>
        <h2 style={h2Style}>Key technical decisions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {[
            {
              decision: "Isolated PostgreSQL over querying Redshift directly",
              why: "Redshift queries were slow and expensive for interactive use. A dedicated RDS instance let us pre-compute and validate data, giving the dashboard sub-second response times.",
            },
            {
              decision: "Custom auth instead of an off-the-shelf solution",
              why: "Charter's SSO approval process was months out. I built JWT auth with email verification so we could ship and onboard users immediately, with SSO as a future migration.",
            },
            {
              decision: "FastAPI with Pandas for the middle layer",
              why: "The data transformations were complex and nuanced enough that SQL alone wasn't practical. Pandas gave us the flexibility to handle edge cases in Nielsen data processing and engagement calculations.",
            },
            {
              decision: "Airflow for orchestration",
              why: "Multiple data sources on different schedules with dependencies between them. Airflow let us define DAGs for daily, weekly, and monthly loads with automatic retry and alerting on failures.",
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

      {/* Feature demos */}
      <section style={{ marginBottom: sectionGap }}>
        <h2 style={h2Style}>Feature demos</h2>
        <p style={{ ...pStyle, marginBottom: "1rem" }}>
          All demos use dummy data and are sped up.
        </p>

        <VideoDemo
          title="Interactive Coverage Map"
          src="/videos/coverage_map_demo.mp4"
          caption="Built with MapboxGL and GeoJSON data stored in S3. Tiles are lazy-loaded for performance."
        />

        <VideoDemo
          title="KPI Dashboard"
          src="/videos/engagement_demo.mp4"
          caption="15+ table and graph views built with TanStack Table and Chart.js. Backend processing via FastAPI and Pandas."
        />

        <VideoDemo
          title="Automated Nielsen Reporting"
          src="/videos/nielsen_report_demo.mp4"
          caption="Analysts upload files, the system validates and processes them, and generates downloadable reports with Pandas and Matplotlib."
        />
      </section>

      {/* Impact */}
      <section style={{ marginBottom: sectionGap }}>
        <h2 style={h2Style}>Impact</h2>
        <p style={pStyle}>
          The platform is in production and used by analysts and executives
          across the Spectrum News organization. It replaced a manual workflow
          that took hours per week and eliminated recurring data quality issues
          that had been a persistent pain point for the team.
        </p>
      </section>
    </div>
  );
}
