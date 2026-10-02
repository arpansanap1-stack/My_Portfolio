import { ImageResponse } from "next/og";

export const alt = "Arpan Sanap — Computer Science & Design Builder";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const badges = [
    "Curiosity Machine (AI)",
    "MarketPulse (Analytics)",
    "Full-Stack Web",
    "Maharashtra, IN",
    "Open to Roles",
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#050505",
          padding: "60px 72px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Crimson glow accent in corner */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(227, 19, 27, 0.4) 0%, rgba(5, 5, 5, 0) 70%)",
          }}
        />

        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1px solid #333333",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#e3131b",
                fontWeight: 700,
                fontSize: "18px",
              }}
            >
              AS
            </div>
            <span
              style={{
                fontSize: "14px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#e3131b",
                fontWeight: 600,
              }}
            >
              Computer Science &amp; Design Builder
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "6px 16px",
              borderRadius: "9999px",
              border: "1px solid #262626",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              color: "#a1a1aa",
              fontSize: "14px",
            }}
          >
            github.com/arpansanap1-stack
          </div>
        </div>

        {/* Main typography */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxWidth: "980px",
          }}
        >
          <div
            style={{
              fontSize: "74px",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#f5f2eb",
              lineHeight: 1.05,
            }}
          >
            Arpan Sanap
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#d8d2be",
              lineHeight: 1.4,
              fontWeight: 400,
            }}
          >
            Exploring AI, software development, data systems, and product design through building.
          </div>
        </div>

        {/* Bottom tags */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {badges.map((badge) => (
            <div
              key={badge}
              style={{
                padding: "8px 18px",
                borderRadius: "10px",
                border: "1px solid #262626",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "#e4e4e7",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
