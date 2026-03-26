export default function Thoughts() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        minHeight: "40vh",
        justifyContent: "center",
      }}
    >
      <p style={{ color: "var(--text-muted)" }}>
        Writing some things down. Check back soon.
      </p>
      <a
        href="https://x.com/jack___driscoll"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: "0.875rem",
          color: "var(--text-muted)",
          borderBottom: "1px solid var(--border)",
          alignSelf: "flex-start",
          transition: "color 0.15s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.color = "var(--text)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.color = "var(--text-muted)")
        }
      >
        In the meantime → @jack___driscoll
      </a>
    </div>
  );
}
