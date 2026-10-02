import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
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
          color: "#e3131b",
          fontSize: "20px",
          fontWeight: 800,
          borderRadius: "6px",
          border: "1px solid #333333",
        }}
      >
        A
      </div>
    ),
    {
      ...size,
    }
  );
}
