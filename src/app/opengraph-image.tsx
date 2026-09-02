import { ImageResponse } from "next/og";

export const alt = "KaKhaGa — The Mirror Mind Literature Festival";
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
          background: "#F4F3F1",
          color: "#111111",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 4, color: "#EA1F45" }}>
          THE MIRROR MIND
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 148, fontWeight: 800, lineHeight: 0.95 }}>
            KaKhaGa
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
