export const axieTokens = {
  colors: {
    ink: "#263024",
    paper: "#F4F1E6",
    surface: "#FFFDF4",
    surfaceSoft: "#E8EAD6",
    muted: "#68705D",
    line: "#D7D2B9",
    accent: "#6F7F3F",
    accentSoft: "#E0E8C7",
    danger: "#A45447",
    dangerSoft: "#EFD8D0",
    warning: "#947236",
    warningSoft: "#ECDCB8",
    info: "#4D6972",
    infoSoft: "#DCE8E6"
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
