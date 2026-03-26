import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "About", match: ["/", "/about"] },
  { to: "/projects", label: "Projects", match: ["/projects"] },
  { to: "/thoughts", label: "Thoughts", match: ["/thoughts"] },
];

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header
      style={{
        width: "100%",
        maxWidth: "var(--max-width)",
        margin: "0 auto",
        padding: "2rem 1.5rem 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
      }}
    >
      <Link
        to="/"
        style={{
          fontSize: "0.95rem",
          fontWeight: 500,
          color: "var(--text)",
          textDecoration: "none",
          letterSpacing: "-0.01em",
        }}
      >
        Jack Driscoll
      </Link>
      <nav style={{ display: "flex", gap: "1.5rem" }}>
        {navLinks.map(({ to, label, match }) => (
          <Link
            key={to}
            to={to}
            style={{
              fontSize: "0.85rem",
              color: match.includes(pathname)
                ? "var(--text)"
                : "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.15s ease",
            }}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
