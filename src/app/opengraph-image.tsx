import { ImageResponse } from "next/og";

export const alt = "KILF — Kollam International Literature Festival";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#F2E8D4",
          color: "#17110C",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 4, color: "#9C7A4C" }}>
          KOLLAM INTERNATIONAL LITERATURE FESTIVAL
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 148, fontWeight: 800, lineHeight: 0.95, color: "#6F1F2F" }}>
            KILF
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700, marginTop: 20 }}>
            Literature Festival
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "rgba(17,17,17,0.6)" }}>
          15–18 January 2027 · Karunagappally
        </div>
      </div>
    ),
    { ...size }
  );
}
