import { css, keyframes } from "@emotion/react";

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const spin = css({});

export const app = css({
  textAlign: "center",
});

export const logo = css({
  animation: `${rotate} infinite 20s linear`,
});

export const header = css({
  backgroundColor: "#282c34",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "white",
});

export const link = css({
  color: "#61dafb",
});
