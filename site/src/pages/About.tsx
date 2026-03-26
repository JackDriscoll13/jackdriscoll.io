export default function About() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <p>
        I'm a product-oriented software engineer. I work at Spectrum
        building data systems and run{" "}
        <a
          href="https://umako.co"
          target="_blank"
          rel="noopener noreferrer"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          Umako Labs
        </a>{" "}
        on the side.
      </p>
      <p>
        My biggest project at Spectrum is an{" "}
        <a
          href="/projects/spectrum-analytics"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          internal analytics app
        </a>{" "}
        that lets product teams
        explore and report on large-scale viewership data. Through Umako Labs, I
        build custom applications and AI integrations for clients. We're currently working on 2
        projects.
      </p>
      <p>
        I also like to build and ship independent projects. Lately that's been
        an automated restaurant reservation system and a native iOS workout
        timer.
      </p>
      <p>
        I studied data science, business, and psychology at the
        University of Colorado, where I did{" "}
        <a
          href="https://www.colorado.edu/lab/shine/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          HCI research
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
        on AI collaboration and trust.
      </p>
      <p style={{ color: "var(--text-muted)" }}>I live in lower Manhattan.</p>
    </div>
  );
}
