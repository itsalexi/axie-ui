export const axieTokens = {
  colors: {
    ink: "#28231F",
    paper: "#F7F2EA",
    surface: "#FFFDF7",
    surfaceSoft: "#EEE6D9",
    muted: "#766D62",
    line: "#DDD0BE",
    accent: "#3F665C",
    accentSoft: "#DDE9E3",
    danger: "#A44F43",
    dangerSoft: "#F0D8D2",
    warning: "#967032",
    warningSoft: "#EEDFC2",
    info: "#4F6A7F",
    infoSoft: "#DDE7ED"
  },
  radii: {
    card: "10px",
    control: "12px",
    sheet: "30px",
    pill: "999px"
  },
  spacing: {
    page: "20px",
    xs: "6px",
    sm: "10px",
    md: "14px",
    lg: "20px",
    xl: "28px",
    "2xl": "36px"
  },
  motion: {
    fast: "160ms",
    base: "240ms",
    slow: "360ms",
    ease: "cubic-bezier(0.2, 0.9, 0.2, 1)"
  }
} as const;

export type AxieTokens = typeof axieTokens;
