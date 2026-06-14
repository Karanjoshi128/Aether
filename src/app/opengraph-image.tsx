import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const alt = "Aether Studio — We build, ship, and scale the web.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = readFileSync(join(process.cwd(), "public/logo/lockup-white.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(1100px 700px at 0% 0%, rgba(124,92,255,0.28), transparent 58%), #0F0F12",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={341} height={48} alt="Aether Studio" />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 78,
              fontWeight: 800,
              color: "#EDEDEB",
              lineHeight: 1.04,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            We build, ship, and scale the web.
          </div>
          <div style={{ fontSize: 30, color: "#A0A0AA", maxWidth: 900 }}>
            One accountable team for development, hosting, cloud, CI/CD, and uptime.
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, fontSize: 23, color: "#C9C9DA" }}>
          {["Development", "Maintenance", "Hosting", "Cloud", "CI/CD"].map((t) => (
            <div
              key={t}
              style={{
                padding: "10px 20px",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
