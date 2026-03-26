export default function About() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <p>
        I'm Jack. I build software.
      </p>
      <p>
        During the day, I work at{" "}
        <a
          href="https://en.wikipedia.org/wiki/Spectrum_(brand)"
          target="_blank"
          rel="noopener noreferrer"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          Spectrum
        </a>{" "}
        building full-stack data systems — my biggest project there is an internal
        analytics app that lets product teams explore and report on large-scale
        viewership data. On the side, I started{" "}
        <a
          href="https://umako.co"
          target="_blank"
          rel="noopener noreferrer"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          Umako Labs
        </a>
        , a small software company where I build custom applications for
        clients. We're currently working on 2 projects.
      </p>
      <p>
        On my own time, I build things that interest me. Lately that's been an{" "}
        automated restaurant reservation system and a native iOS workout timer.
      </p>
      <p>
        I studied data science, business, and psychology at the{" "}
        <a
          href="https://www.colorado.edu"
          target="_blank"
          rel="noopener noreferrer"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          University of Colorado
        </a>
        , where I also did{" "}
        <a
          href="https://www.colorado.edu/lab/shine/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          Human-Computer Interaction research
        </a>{" "}
        and co-authored a{" "}
        <a
          href="https://www.tandfonline.com/doi/full/10.1080/1463922X.2022.2086644"
          target="_blank"
          rel="noopener noreferrer"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          paper
        </a>{" "}
        on AI collaboration and trust using brain imaging.
      </p>
      <p style={{ color: "var(--text-muted)" }}>
        When I'm not at a keyboard, I like listening to podcasts, skiing, and
        having long dinners with friends. I live in lower Manhattan.
      </p>
    </div>
  );
}
