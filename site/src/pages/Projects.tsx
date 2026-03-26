import { Link } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  tech: string[];
  details: string[];
  link?: { url: string; label: string };
  github?: string;
  detailRoute?: string;
  year: string;
}

const projects: Project[] = [
  {
    title: "Black Horse Reserve",
    description:
      "An automated restaurant reservation system that scouts availability patterns on Resy and books tables the instant they drop.",
    tech: [
      "React",
      "TypeScript",
      "FastAPI",
      "Supabase",
      "AWS EC2",
      "CloudFront",
    ],
    details: [
      "Deploys fleets of EC2 workers to observe when restaurants release tables, learns drop patterns over time, and executes bookings within milliseconds",
      "Dual-database architecture. Supabase for shared state. Local SQLite for jobs and scheduling.",
      "Invite-only frontend with email OTP auth, snipe scheduling, admin dashboard, and community features",
    ],
    link: { url: "https://www.blackhorsereserve.com", label: "blackhorsereserve.com" },
    year: "2025–2026",
  },
  {
    title: "Spectrum News Analytics App",
    description:
      "A full-stack analytics platform that pipelines viewership data from Charter's Redshift warehouse into a React dashboard for product teams.",
    tech: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Redshift",
      "AWS",
    ],
    details: [
      "Built over two years at Spectrum, the largest and longest-running project on this list",
      "Interactive coverage maps, engagement analytics with 8+ views, Nielsen daily reporting, data export",
      "Custom JWT auth, automated data pipelines with APScheduler, admin console",
    ],
    detailRoute: "/projects/spectrum-analytics",
    year: "2024–present",
  },
  {
    title: "Kettlebell Interval Timer",
    description:
      "A free iOS app for timing kettlebell workouts and interval-based exercises. No ads, no subscriptions.",
    tech: ["Swift", "iOS"],
    details: [
      "Built to solve my own problem — needed a clean timer for kettlebell and core workouts",
      "Native iOS, designed for simplicity",
    ],
    link: { url: "https://apps.apple.com/us/app/kettlebell-interval-timer/id6759739598", label: "See it on the App Store" },
    year: "2026",
  },
  {
    title: "Automotive Lead Engine",
    description:
      "A web app that generates targeted sales leads for an automotive business using Google's Places API with real-time streaming results.",
    tech: ["React", "FastAPI", "Google Places API", "Docker", "AWS"],
    details: [
      "Zip code bulk search across up to 50 codes with streaming delivery via Python generators",
      "Built for a friend's company that sells to automotive businesses",
      "Analytics dashboard for tracking API usage",
    ],
    link: { url: "https://www.qfresheners.com/leads", label: "qfresheners.com/leads" },
    github: "https://github.com/JackDriscoll13/automotive_lead_engine",
    year: "2024",
  },
  {
    title: "Meeting Summarization Tool",
    description:
      "An OpenAI-powered tool that chunks meeting transcripts and generates concise notes. Built when LLM context windows were tiny.",
    tech: ["Python", "OpenAI API"],
    details: [
      "Distributed to ~8 people on my team at Charter",
      "Chunking strategy was essential given 2023-era context window limits",
    ],
    github: "https://github.com/JackDriscoll13/meeting_summarization",
    year: "2023",
  },
];

const linkStyle: React.CSSProperties = {
  fontSize: "0.8rem",
  color: "var(--text-muted)",
  textDecoration: "none",
  borderBottom: "1px solid var(--border)",
  transition: "color 0.15s ease",
};

function hoverIn(e: React.MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.color = "var(--text)";
}
function hoverOut(e: React.MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.color = "var(--text-muted)";
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      style={{
        paddingBottom: "1.5rem",
        marginBottom: "1.5rem",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: "0.5rem",
        }}
      >
        <h2
          style={{
            fontSize: "0.95rem",
            fontWeight: 500,
            color: "var(--text)",
          }}
        >
          {project.title}
        </h2>
        <span
          style={{
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            flexShrink: 0,
            marginLeft: "1rem",
          }}
        >
          {project.year}
        </span>
      </div>

      <p
        style={{
          fontSize: "0.875rem",
          color: "var(--text-muted)",
          marginBottom: "0.75rem",
          lineHeight: 1.6,
        }}
      >
        {project.description}
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.375rem",
          marginBottom: "0.75rem",
        }}
      >
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              fontSize: "0.7rem",
              color: "var(--text-muted)",
              padding: "0.15rem 0.5rem",
              border: "1px solid var(--border)",
              borderRadius: "3px",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <ul
        style={{
          paddingLeft: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.35rem",
          marginBottom: "0.75rem",
        }}
      >
        {project.details.map((d, i) => (
          <li
            key={i}
            style={{
              fontSize: "0.825rem",
              color: "var(--text-muted)",
              lineHeight: 1.55,
            }}
          >
            {d}
          </li>
        ))}
      </ul>

      {(project.link || project.github || project.detailRoute) && (
        <div style={{ display: "flex", gap: "1rem" }}>
          {project.detailRoute && (
            <Link
              to={project.detailRoute}
              style={linkStyle}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              Read more
            </Link>
          )}
          {project.link && (
            <a
              href={project.link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              {project.link.label}
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              GitHub
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <div>
      {projects.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </div>
  );
}
