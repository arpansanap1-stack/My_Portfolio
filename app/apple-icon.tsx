import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050505",
          borderRadius: "36px",
          border: "4px solid #262626",
        }}
      >
        <div
          style={{
            color: "#e3131b",
            fontSize: "96px",
            fontWeight: 800,
            lineHeight: 1,
          }}
        >
          A
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
