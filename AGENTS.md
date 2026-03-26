## Learned User Preferences

- Prefers minimal, editorial design inspired by rauchg.com — dark mode only, no Tailwind (vanilla CSS + custom properties), very subtle page transitions
- Dislikes em dashes in copy — explicitly flagged overuse and asked for removal
- Technical writing should use a natural voice (not formal/third-person), with diagrams as the centerpiece and explanation around them
- Uses Geist font for the site
- Scene Sense and Venture Sessions (Umako Labs client projects) must NOT be listed explicitly on the website
- Chrome TLS impersonation detail for Black Horse Reserve is secret — must never appear on the site
- Identifies as "product-oriented software engineer" — prefers "independent projects" over "things for myself" for side work
- Primary audience for site is hiring managers; potential clients are a close second
- Wants project context kept in this repo so agents can help update both the website and resume simultaneously
- Saves agent-generated context docs in `docs/rebrand/` (gitignored)

## Learned Workspace Facts

- Main branch auto-deploys to Vercel — use `v2` branch for development to avoid breaking production
- Repo structure: old site in `v1/`, new site in `site/`, context docs in `docs/rebrand/` (gitignored)
- Stack: React + Vite + TypeScript, vanilla CSS with custom properties, Geist font via Google Fonts
- Design tokens: slate dark background (#181a1f), raised surfaces (#1e2027), soft white text (#e8e8eb), muted secondary (#7a7d85), 640px max-width content column
- GitHub: JackDriscoll13; `gh` CLI is installed and authenticated
- Jack works at Spectrum (day job, building data systems) and runs Umako Labs LLC (side venture, custom software, currently 2 projects)
- Key portfolio projects: Black Horse Reserve, Spectrum News Analytics App, Kettlebell Interval Timer, Automotive Lead Engine, Meeting Summarization
- Spectrum Analytics has a sub-route detail page at `/projects/spectrum-analytics` with custom SVG architecture diagram and video demos
- Supabase MCP server (`user-blackhorse_supabase`) is connected — likely for Black Horse Reserve
