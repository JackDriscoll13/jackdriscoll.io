import { useState, useEffect } from "react";

const EMAIL = "driscoll.jack.m@gmail.com";

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
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          style={{
            ...footerLinkStyle,
            marginLeft: "auto",
            background: "none",
            border: "none",
            lineHeight: 1,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--text)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--text-muted)")
          }
        >
          {theme === "dark" ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </footer>
      {showEmail && <EmailModal onClose={() => setShowEmail(false)} />}
    </>
  );
}
