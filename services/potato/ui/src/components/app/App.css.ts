import { style, keyframes } from "@vanilla-extract/css";

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const spin = style({});

export const app = style({
  textAlign: "center",
});

export const logo = style({
  animation: `${rotate} infinite 20s linear`,
});

export const header = style({
  backgroundColor: "#282c34",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "white",
});

export const link = style({
  color: "#61dafb",
});
