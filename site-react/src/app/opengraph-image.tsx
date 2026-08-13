import { ImageResponse } from "next/og";

export const alt = "Vladimir Fiffie Jr — Creative IT Graduate";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social preview card, generated at build time. Mirrors the site: black on
 * white, heavy uppercase type, hard-edged rule.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          color: "#000000",
          padding: "72px",
          border: "16px solid #000000",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
        >
          Portfolio
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
            }}
          >
            Vladimir
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
            }}
          >
            Fiffie Jr.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "6px solid #000000",
            paddingTop: "28px",
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex" }}>Creative IT Graduate</div>
          <div style={{ display: "flex" }}>React · Next.js · TypeScript</div>
        </div>
      </div>
    ),
    size,
  );
}
