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

const arrowColor = "#3a3d45";
const accentColor = "#6e7179";

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

export default function SpectrumDiagram() {
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
        viewBox="0 0 720 380"
        style={{
          width: "100%",
          minWidth: 500,
          height: "auto",
        }}
      >
        {/* Data Sources */}
        <Node x={10} y={40} w={130} h={50} label="Redshift Datalake" subLabel="Spectrum viewership" />
        <Node x={10} y={120} w={130} h={50} label="Hadoop On-Prem" subLabel="Legacy data" />
        <Node x={10} y={200} w={130} h={50} label="Nielsen API" subLabel="Third-party ratings" />

        {/* Orchestration */}
        <Node x={220} y={110} w={140} h={60} label="Orchestration Server" subLabel="Airflow + API triggers" accent />

        {/* Arrows: sources → orchestration */}
        <Arrow x1={140} y1={65} x2={220} y2={130} />
        <Arrow x1={140} y1={145} x2={220} y2={140} />
        <Arrow x1={140} y1={225} x2={220} y2={155} />

        {/* Batch label */}
        <text
          x={290}
          y={195}
          style={{
            ...subLabelStyle,
            fontSize: 8,
            fill: accentColor,
          }}
        >
          daily / weekly / monthly
        </text>

        {/* AWS VPC group */}
        <GroupBox x={430} y={10} w={280} h={360} label="AWS VPC" />

        {/* Arrow: orchestration → RDS */}
        <Arrow x1={360} y1={145} x2={430} y2={240} label="batch loads" />

        {/* Nodes inside VPC */}
        <Node x={460} y={35} w={220} h={50} label="Frontend" subLabel="React + TypeScript, Caddy" />
        <Node x={460} y={115} w={220} h={50} label="Backend API" subLabel="FastAPI + Gunicorn" />
        <Node x={460} y={205} w={140} h={50} label="PostgreSQL" subLabel="AWS RDS" accent />
        <Node x={460} y={290} w={140} h={50} label="S3 Bucket" subLabel="Files + GeoJSON + logs" />
        <Node x={620} y={205} w={70} h={50} label="S3" subLabel="Backups" />

        {/* Internet gateway */}
        <Node x={530} y={-25} w={100} h={30} label="Internet" subLabel="" />
        <Arrow x1={580} y1={5} x2={570} y2={35} />

        {/* Internal arrows */}
        <Arrow x1={570} y1={85} x2={570} y2={115} />
        <Arrow x1={570} y1={165} x2={530} y2={205} />
        <Arrow x1={570} y1={165} x2={530} y2={290} />
        <Arrow x1={600} y1={230} x2={620} y2={230} />

        {/* Labels for data flow direction */}
        <text x={60} y={25} style={{ ...subLabelStyle, fontSize: 10, textAnchor: "start", fill: accentColor }}>
          Data Sources
        </text>
      </svg>
    </div>
  );
}
