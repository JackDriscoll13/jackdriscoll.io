const links = [
  { href: "mailto:contact@jackdriscoll.io", label: "Email" },
  { href: "https://github.com/JackDriscoll13", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/jack-driscoll-3026721a0/",
    label: "LinkedIn",
  },
  { href: "https://x.com/JackDriscworkin", label: "X" },
];

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        maxWidth: "var(--max-width)",
        margin: "0 auto",
        padding: "2rem 1.5rem 2.5rem",
        display: "flex",
        gap: "1.25rem",
        borderTop: "1px solid var(--border)",
      }}
    >
      {links.map(({ href, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto") ? undefined : "_blank"}
          rel="noopener noreferrer"
          style={{
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            textDecoration: "none",
            transition: "color 0.15s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--text)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--text-muted)")
          }
        >
          {label}
        </a>
      ))}
    </footer>
  );
}
