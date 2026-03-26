import { useState, useEffect } from "react";

const EMAIL = "driscol.jack.m@gmail.com";

const links = [
  { href: "https://github.com/JackDriscoll13", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/jack-driscoll-3026721a0/",
    label: "LinkedIn",
  },
  { href: "https://x.com/jack___driscoll", label: "X" },
];

const footerLinkStyle: React.CSSProperties = {
  fontSize: "0.8rem",
  color: "var(--text-muted)",
  textDecoration: "none",
  transition: "color 0.15s ease",
  cursor: "pointer",
};

function EmailModal({ onClose }: { onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  function copy() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0, 0, 0, 0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--bg-raised)",
          border: "1px solid var(--border)",
          borderRadius: 8,
          padding: "1.5rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          minWidth: 280,
        }}
      >
        <span
          style={{
            fontSize: "0.875rem",
            color: "var(--text)",
            fontFamily: "var(--font)",
            letterSpacing: "-0.01em",
            userSelect: "all",
          }}
        >
          {EMAIL}
        </span>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <button
            onClick={copy}
            style={{
              fontSize: "0.8rem",
              fontFamily: "var(--font)",
              color: "var(--text)",
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: 4,
              padding: "0.35rem 0.85rem",
              cursor: "pointer",
              transition: "color 0.15s ease",
            }}
          >
            {copied ? "Copied" : "Copy"}
          </button>
          <button
            onClick={onClose}
            style={{
              fontSize: "0.8rem",
              fontFamily: "var(--font)",
              color: "var(--text-muted)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.35rem 0.5rem",
              transition: "color 0.15s ease",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function getTheme(): "dark" | "light" {
  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

export default function Footer() {
  const [showEmail, setShowEmail] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(getTheme);

  function flipTheme() {
    const next = theme === "dark" ? "light" : "dark";
    if (next === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.removeItem("theme");
    }
    setTheme(next);
  }

  return (
    <>
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
        <span
          role="button"
          tabIndex={0}
          onClick={() => setShowEmail(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setShowEmail(true);
          }}
          style={footerLinkStyle}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--text)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--text-muted)")
          }
        >
          Email
        </span>
        {links.map(({ href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={footerLinkStyle}
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
        <button
          onClick={flipTheme}
          style={{
            ...footerLinkStyle,
            marginLeft: "auto",
            background: "none",
            border: "none",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--text)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--text-muted)")
          }
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </footer>
      {showEmail && <EmailModal onClose={() => setShowEmail(false)} />}
    </>
  );
}
