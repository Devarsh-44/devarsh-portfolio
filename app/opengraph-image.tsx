import { ImageResponse } from "next/og";

export const alt = "Devarsh Kotak · Craft Over Slop · Built From Zero";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          backgroundColor: "#0C1015",
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(217, 78, 52, 0.15), transparent 40%), radial-gradient(circle at 90% 80%, rgba(34, 211, 238, 0.08), transparent 45%)",
          padding: "48px 52px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#F4EFE6",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle Background Grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.8,
          }}
        />

        {/* Outer Border Frame */}
        <div
          style={{
            position: "absolute",
            inset: "20px",
            display: "flex",
            border: "1px solid rgba(244, 239, 230, 0.1)",
            borderRadius: "20px",
          }}
        />

        {/* LEFT COLUMN: Typography, Pills, Swatches */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "50%",
            paddingRight: "28px",
          }}
        >
          {/* Header Block */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* Logo Mark with Accent Bar */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginBottom: "24px",
              }}
            >
              <span
                style={{
                  fontSize: "44px",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  color: "#F4EFE6",
                  lineHeight: 1,
                }}
              >
                DK<span style={{ color: "#D94E34" }}>.</span>
              </span>
              <div
                style={{
                  width: "56px",
                  height: "5px",
                  backgroundColor: "#D94E34",
                  borderRadius: "2px",
                  marginTop: "6px",
                }}
              />
            </div>

            {/* Red Eyebrow */}
            <div
              style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#D94E34",
                marginBottom: "14px",
                fontFamily: "monospace",
              }}
            >
              CRAFT &amp; TELEMETRY · 2026 ARCHIVE
            </div>

            {/* Huge Headline */}
            <h1
              style={{
                fontSize: "56px",
                fontWeight: 900,
                lineHeight: 0.98,
                letterSpacing: "-0.03em",
                color: "#F4EFE6",
                margin: "0 0 16px 0",
                textTransform: "uppercase",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span>CRAFT OVER SLOP.</span>
              <span style={{ color: "#D94E34" }}>BUILT FROM ZERO.</span>
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.45,
                color: "#94A3B8",
                margin: "0 0 24px 0",
                maxWidth: "460px",
              }}
            >
              A tactile engineering portfolio: spring physics, cutting-mat
              surfaces, race telemetry and high-contrast editorial craft.
            </p>

            {/* Pill Badges */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "20px",
              }}
            >
              {[
                "● 4 deep dives",
                "● Desktop + mobile",
                "● Light + dark",
                "● Spring physics",
                "● Interactive labs",
              ].map((pill) => (
                <div
                  key={pill}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    borderRadius: "999px",
                    padding: "6px 14px",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.03em",
                    color: "#E2E8F0",
                  }}
                >
                  {pill}
                </div>
              ))}
            </div>

            {/* Color Swatches */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {[
                { name: "Terracotta", bg: "#D94E34", text: "T" },
                { name: "Dark Pitch", bg: "#111111", text: "D", border: "1px solid #333" },
                { name: "Cream Paper", bg: "#F4EFE6", text: "P", color: "#111" },
                { name: "Telemetry Cyan", bg: "#22D3EE", text: "C", color: "#111" },
                { name: "Slate Foil", bg: "#7393B3", text: "S" },
              ].map((swatch) => (
                <div
                  key={swatch.name}
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    backgroundColor: swatch.bg,
                    border: swatch.border || "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    fontWeight: 800,
                    color: swatch.color || "#FFFFFF",
                  }}
                >
                  {swatch.text}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Attribution */}
          <div
            style={{
              fontSize: "12px",
              color: "#64748B",
              fontFamily: "monospace",
              letterSpacing: "0.05em",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>Built with Next.js 16</span>
            <span>·</span>
            <span>Motion</span>
            <span>·</span>
            <span>Tailwind CSS</span>
            <span>·</span>
            <span style={{ color: "#D94E34" }}>devarshkotak.com</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Layered Desktop + Mobile Mockup Frame */}
        <div
          style={{
            width: "50%",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          {/* Main Desktop Window Frame */}
          <div
            style={{
              width: "530px",
              height: "460px",
              backgroundColor: "#11161D",
              borderRadius: "14px",
              border: "1px solid rgba(255, 255, 255, 0.14)",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Desktop Window Titlebar */}
            <div
              style={{
                height: "36px",
                backgroundColor: "#0A0D12",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 14px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div style={{ width: "9px", height: "9px", borderRadius: "50%", backgroundColor: "#EF4444" }} />
                <div style={{ width: "9px", height: "9px", borderRadius: "50%", backgroundColor: "#F59E0B" }} />
                <div style={{ width: "9px", height: "9px", borderRadius: "50%", backgroundColor: "#10B981" }} />
              </div>
              <div
                style={{
                  fontSize: "11px",
                  fontFamily: "monospace",
                  color: "#64748B",
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  padding: "2px 16px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                devarshkotak.com/case-studies
              </div>
              <div style={{ width: "32px", display: "flex" }} />
            </div>

            {/* Desktop Screen Body */}
            <div
              style={{
                flex: 1,
                padding: "22px 26px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "#0F141C",
              }}
            >
              {/* Top Banner inside Screen */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "#D94E34",
                    fontFamily: "monospace",
                    marginBottom: "4px",
                  }}
                >
                  F1 RACE INTELLIGENCE · RCINTEL STUDIO
                </div>
                <div
                  style={{
                    fontSize: "26px",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    color: "#FFFFFF",
                    lineHeight: 1.1,
                  }}
                >
                  172,337 LAPS. ONE PIT WALL.
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#94A3B8",
                    marginTop: "6px",
                    lineHeight: 1.35,
                    maxWidth: "340px",
                  }}
                >
                  High-frequency telemetry, strategy simulation, and tactile physical tokens.
                </div>
              </div>

              {/* Simulated Telemetry Line Chart */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "8px",
                  padding: "12px",
                  marginTop: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "10px",
                    fontFamily: "monospace",
                    color: "#64748B",
                    marginBottom: "8px",
                  }}
                >
                  <span>RACE TRACE // LAP 1 - 57</span>
                  <span style={{ color: "#22D3EE" }}>VER GAP -0.47s</span>
                </div>

                {/* SVG Telemetry Graphic */}
                <svg width="280" height="70" viewBox="0 0 280 70">
                  <line x1="0" y1="18" x2="280" y2="18" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                  <line x1="0" y1="36" x2="280" y2="36" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                  <line x1="0" y1="54" x2="280" y2="54" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />

                  <polyline
                    fill="none"
                    stroke="#D94E34"
                    strokeWidth="2.5"
                    points="0,32 50,30 90,34 130,33 150,62 165,65 190,35 240,38 280,42"
                  />
                  <polyline
                    fill="none"
                    stroke="#22D3EE"
                    strokeWidth="2"
                    points="0,26 40,24 80,22 120,20 160,25 200,18 240,16 280,14"
                  />
                  <circle cx="150" cy="62" r="4" fill="#D94E34" stroke="#FFFFFF" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Bottom Metric Strip inside Screen */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  paddingTop: "10px",
                  marginTop: "10px",
                }}
              >
                {[
                  { n: "172,337", l: "Laps" },
                  { n: "157", l: "Grands Prix" },
                  { n: "0.00", l: "CLS" },
                  { n: "100", l: "Lighthouse" },
                ].map((stat) => (
                  <div key={stat.l} style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontSize: "14px", fontWeight: 800, color: "#F4EFE6" }}>{stat.n}</span>
                    <span style={{ fontSize: "9px", fontFamily: "monospace", color: "#64748B" }}>{stat.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Overlapping Mobile Device (Paper Theme Preview) */}
          <div
            style={{
              position: "absolute",
              right: "-12px",
              bottom: "-14px",
              width: "220px",
              height: "380px",
              backgroundColor: "#F4EFE6",
              borderRadius: "26px",
              border: "4px solid #1E2530",
              boxShadow: "0 30px 60px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.15)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Phone Top Speaker & Notch */}
            <div
              style={{
                height: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "6px",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "4px",
                  backgroundColor: "#D1C7B7",
                  borderRadius: "999px",
                }}
              />
            </div>

            {/* Phone Screen Header */}
            <div
              style={{
                padding: "8px 16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid rgba(24, 24, 27, 0.08)",
              }}
            >
              <span style={{ fontWeight: 900, fontSize: "14px", color: "#D94E34" }}>DK.</span>
              <div
                style={{
                  fontSize: "9px",
                  fontWeight: 700,
                  backgroundColor: "#18181B",
                  color: "#F4EFE6",
                  padding: "3px 8px",
                  borderRadius: "999px",
                }}
              >
                Paper Mode
              </div>
            </div>

            {/* Phone Content Card */}
            <div
              style={{
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                flex: 1,
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    color: "#D94E34",
                    fontFamily: "monospace",
                  }}
                >
                  DEVARSH KOTAK
                </span>
                <div
                  style={{
                    fontSize: "17px",
                    fontWeight: 800,
                    color: "#18181B",
                    lineHeight: 1.15,
                    marginTop: "4px",
                  }}
                >
                  Tactile craft. Zero templates.
                </div>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#52525B",
                    lineHeight: 1.35,
                    marginTop: "8px",
                  }}
                >
                  Physical spring mass, custom cutting-mat canvas, and real telemetry data.
                </p>
              </div>

              {/* Interactive Card Button */}
              <div
                style={{
                  backgroundColor: "#D94E34",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: 700,
                  borderRadius: "8px",
                  padding: "8px 12px",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px",
                }}
              >
                <span>Explore Deep Dives</span>
                <span>→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
