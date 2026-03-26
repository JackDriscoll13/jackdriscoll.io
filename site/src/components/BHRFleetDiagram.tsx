const nodeStyle: React.CSSProperties = {
  fill: "var(--bg-raised)",
  stroke: "var(--border)",
  strokeWidth: 1.5,
  rx: 6,
};

const activeNodeStyle: React.CSSProperties = {
  ...nodeStyle,
  stroke: "#6e7179",
};

const dimNodeStyle: React.CSSProperties = {
  ...nodeStyle,
  opacity: 0.45,
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
const activeArrowColor = "#6e7179";
const accentColor = "#6e7179";

function Arrow({
  x1,
  y1,
  x2,
  y2,
  label,
  labelOffset,
  active,
  dim,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label?: string;
  labelOffset?: { dx: number; dy: number };
  active?: boolean;
  dim?: boolean;
}) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  const ux = dx / len;
  const uy = dy / len;
  const ax = x2 - ux * 6;
  const ay = y2 - uy * 6;
  const color = active ? activeArrowColor : arrowColor;

  return (
    <g style={dim ? { opacity: 0.25 } : undefined}>
      <line
        x1={x1}
        y1={y1}
        x2={ax}
        y2={ay}
        stroke={color}
        strokeWidth={1.5}
        strokeDasharray={dim ? "3 3" : undefined}
      />
      <polygon
        points={`${x2},${y2} ${ax - uy * 3},${ay + ux * 3} ${ax + uy * 3},${ay - ux * 3}`}
        fill={color}
      />
      {label && (
        <text
          x={(x1 + x2) / 2 + (labelOffset?.dx ?? 0)}
          y={(y1 + y2) / 2 - 6 + (labelOffset?.dy ?? 0)}
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
  style: overrideStyle,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  subLabel?: string;
  style?: React.CSSProperties;
}) {
  const rectStyle = overrideStyle ?? nodeStyle;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} style={rectStyle} />
      <text
        x={x + w / 2}
        y={y + (subLabel ? h / 2 - 3 : h / 2 + 4)}
        style={{ ...labelStyle, opacity: rectStyle.opacity ?? 1 }}
      >
        {label}
      </text>
      {subLabel && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 9}
          style={{ ...subLabelStyle, opacity: rectStyle.opacity ?? 1 }}
        >
          {subLabel}
        </text>
      )}
    </g>
  );
}

export default function BHRFleetDiagram() {
  const wy = [32, 78, 124, 170];
  const wh = 34;

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
        viewBox="0 0 700 220"
        style={{
          width: "100%",
          minWidth: 500,
          height: "auto",
        }}
      >
        {/* Phase labels */}
        <text
          x={160}
          y={16}
          style={{ ...labelStyle, fontSize: 10, textAnchor: "middle" }}
        >
          1. Poll rotation
        </text>
        <text
          x={540}
          y={16}
          style={{ ...labelStyle, fontSize: 10, textAnchor: "middle" }}
        >
          2. Slot detected → race
        </text>

        {/* Divider */}
        <line
          x1={340}
          y1={22}
          x2={340}
          y2={210}
          stroke="var(--border)"
          strokeWidth={1}
          strokeDasharray="4 3"
        />

        {/* Transition arrow */}
        <text
          x={340}
          y={16}
          style={{
            ...subLabelStyle,
            fontSize: 10,
            fill: accentColor,
            textAnchor: "middle",
          }}
        >
          →
        </text>

        {/* === LEFT PANEL: Poll rotation === */}

        {/* Workers: only Worker 2 is active */}
        <Node x={20} y={wy[0]} w={90} h={wh} label="Worker 1" style={dimNodeStyle} />
        <Node x={20} y={wy[1]} w={90} h={wh} label="Worker 2" style={activeNodeStyle} />
        <Node x={20} y={wy[2]} w={90} h={wh} label="Worker 3" style={dimNodeStyle} />
        <Node x={20} y={wy[3]} w={90} h={wh} label="Worker N" style={dimNodeStyle} />

        {/* Resy availability endpoint */}
        <Node x={200} y={72} w={120} h={46} label="Resy API" subLabel="/find (availability)" style={activeNodeStyle} />

        {/* Only active worker polls */}
        <Arrow x1={110} y1={wy[1] + wh / 2} x2={200} y2={95} active />
        <Arrow x1={110} y1={wy[0] + wh / 2} x2={200} y2={85} dim />
        <Arrow x1={110} y1={wy[2] + wh / 2} x2={200} y2={105} dim />
        <Arrow x1={110} y1={wy[3] + wh / 2} x2={200} y2={110} dim />

        {/* Rotation annotation */}
        <text
          x={160}
          y={200}
          style={{
            ...subLabelStyle,
            fontSize: 8,
            fill: accentColor,
            textAnchor: "middle",
          }}
        >
          rotate every ~100 calls to avoid rate limits
        </text>

        {/* === RIGHT PANEL: Race === */}

        {/* All workers active */}
        <Node x={380} y={wy[0]} w={90} h={wh} label="Worker 1" style={activeNodeStyle} />
        <Node x={380} y={wy[1]} w={90} h={wh} label="Worker 2" style={activeNodeStyle} />
        <Node x={380} y={wy[2]} w={90} h={wh} label="Worker 3" style={activeNodeStyle} />
        <Node x={380} y={wy[3]} w={90} h={wh} label="Worker N" style={activeNodeStyle} />

        {/* Resy booking endpoint */}
        <Node x={560} y={72} w={120} h={46} label="Resy API" subLabel="booking endpoint" style={activeNodeStyle} />

        {/* All workers fire */}
        <Arrow x1={470} y1={wy[0] + wh / 2} x2={560} y2={85} active />
        <Arrow x1={470} y1={wy[1] + wh / 2} x2={560} y2={92} active />
        <Arrow x1={470} y1={wy[2] + wh / 2} x2={560} y2={102} active />
        <Arrow x1={470} y1={wy[3] + wh / 2} x2={560} y2={112} active />

        {/* First success annotation */}
        <text
          x={540}
          y={200}
          style={{
            ...subLabelStyle,
            fontSize: 8,
            fill: accentColor,
            textAnchor: "middle",
          }}
        >
          first successful booking wins
        </text>
      </svg>
    </div>
  );
}
