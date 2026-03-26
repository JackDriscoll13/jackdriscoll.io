const nodeStyle: React.CSSProperties = {
  fill: "var(--bg-raised)",
  stroke: "var(--border)",
  strokeWidth: 1.5,
  rx: 6,
};

const labelStyle: React.CSSProperties = {
  fill: "var(--text)",
  fontSize: 11,
  fontFamily: "var(--font)",
  fontWeight: 500,
  textAnchor: "middle" as const,
};

const subLabelStyle: React.CSSProperties = {
  fill: "var(--text-muted)",
  fontSize: 9,
  fontFamily: "var(--font)",
  fontWeight: 400,
  textAnchor: "middle" as const,
};

const arrowColor = "var(--diagram-arrow)";
const accentColor = "var(--diagram-accent)";

function Arrow({
  x1,
  y1,
  x2,
  y2,
  label,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label?: string;
}) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  const ux = dx / len;
  const uy = dy / len;
  const ax = x2 - ux * 6;
  const ay = y2 - uy * 6;

  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={ax}
        y2={ay}
        stroke={arrowColor}
        strokeWidth={1.5}
      />
      <polygon
        points={`${x2},${y2} ${ax - uy * 3},${ay + ux * 3} ${ax + uy * 3},${ay - ux * 3}`}
        fill={arrowColor}
      />
      {label && (
        <text
          x={(x1 + x2) / 2}
          y={(y1 + y2) / 2 - 6}
          style={{
            ...subLabelStyle,
            fontSize: 8,
            fill: accentColor,
          }}
        >
          {label}
        </text>
      )}
    </g>
  );
}

function Node({
  x,
  y,
  w,
  h,
  label,
  subLabel,
  accent,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  subLabel?: string;
  accent?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        style={{
          ...nodeStyle,
          stroke: accent ? accentColor : "var(--border)",
        }}
      />
      <text x={x + w / 2} y={y + (subLabel ? h / 2 - 4 : h / 2 + 4)} style={labelStyle}>
        {label}
      </text>
      {subLabel && (
        <text x={x + w / 2} y={y + h / 2 + 10} style={subLabelStyle}>
          {subLabel}
        </text>
      )}
    </g>
  );
}

function GroupBox({
  x,
  y,
  w,
  h,
  label,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={8}
        fill="none"
        stroke="var(--border)"
        strokeWidth={1}
        strokeDasharray="4 3"
      />
      <text
        x={x + 10}
        y={y + 14}
        style={{
          ...subLabelStyle,
          fontSize: 9,
          textAnchor: "start",
          fill: accentColor,
        }}
      >
        {label}
      </text>
    </g>
  );
}

export default function BHRDiagram() {
  return (
    <div
      style={{
        width: "100%",
        overflowX: "auto",
        margin: "1.5rem 0",
        padding: "1.5rem 0",
      }}
    >
      <svg
        viewBox="0 0 700 380"
        style={{
          width: "100%",
          minWidth: 500,
          height: "auto",
        }}
      >
        {/* Frontend */}
        <Node x={200} y={10} w={200} h={55} label="Frontend" subLabel="React SPA · S3 + CloudFront" />

        {/* CloudWatch */}
        <Node x={555} y={18} w={120} h={42} label="CloudWatch" subLabel="Logging" />

        {/* Supabase */}
        <Node x={50} y={150} w={230} h={70} label="Supabase" subLabel="Auth · Postgres · Edge Functions" accent />

        {/* Manager */}
        <Node x={410} y={150} w={180} h={55} label="Manager" subLabel="FastAPI orchestrator · EC2" />

        {/* EC2 Worker Fleets group */}
        <GroupBox x={340} y={272} w={335} h={95} label="EC2 Worker Fleets" />

        {/* Scout Fleet */}
        <Node x={355} y={296} w={140} h={55} label="Scout Fleet" subLabel="Observes availability" />

        {/* Sniper Fleet */}
        <Node x={520} y={296} w={140} h={55} label="Sniper Fleet" subLabel="Books reservations" />

        {/* Arrow: Frontend → Supabase */}
        <Arrow x1={280} y1={65} x2={180} y2={150} label="auth + data" />

        {/* Arrow: Supabase → Manager (polls) */}
        <Arrow x1={280} y1={177} x2={410} y2={172} label="polls requests" />

        {/* Arrow: Manager → Supabase (results) */}
        <Arrow x1={410} y1={195} x2={280} y2={200} label="writes results" />

        {/* Arrow: Manager → Scout Fleet */}
        <Arrow x1={470} y1={205} x2={425} y2={296} label="SSH + launch" />

        {/* Arrow: Manager → Sniper Fleet */}
        <Arrow x1={530} y1={205} x2={590} y2={296} label="SSH + launch" />

        {/* Arrow: Manager → CloudWatch */}
        <Arrow x1={560} y1={155} x2={600} y2={60} label="logs" />
      </svg>
    </div>
  );
}
