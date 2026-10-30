import { createTheme, alpha } from "@mui/material/styles";

export const colors = {
  bg: "#0A1020",
  bgAlt: "#0D1528",
  surface: "#111B31",
  border: "#1F2B45",
  text: "#E6EDF7",
  muted: "#94A3B8",
  accent: "#2DD4BF",
  accent2: "#818CF8",
};

export const gradient = `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accent2} 100%)`;
export const monoFont = '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace';

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: colors.accent, contrastText: "#04201C" },
    secondary: { main: colors.accent2 },
    background: { default: colors.bg, paper: colors.surface },
    text: { primary: colors.text, secondary: colors.muted },
    divider: colors.border,
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    h1: { fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05 },
    h2: { fontWeight: 700, letterSpacing: "-0.02em" },
    h3: { fontWeight: 700, letterSpacing: "-0.01em" },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    body1: { lineHeight: 1.75 },
    button: { textTransform: "none", fontWeight: 600 },
    overline: { fontFamily: monoFont, letterSpacing: "0.12em", fontWeight: 500 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: "smooth", scrollPaddingTop: 72 },
        body: {
          backgroundColor: colors.bg,
          WebkitFontSmoothing: "antialiased",
        },
        "::selection": { background: alpha(colors.accent, 0.3) },
        "@media (prefers-reduced-motion: reduce)": {
          html: { scrollBehavior: "auto" },
          "*, *::before, *::after": {
            animationDuration: "0.01ms !important",
            transitionDuration: "0.01ms !important",
          },
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 10, padding: "10px 22px" },
        outlined: { borderColor: colors.border },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontFamily: monoFont,
          fontSize: "0.75rem",
          backgroundColor: alpha(colors.accent, 0.08),
          color: colors.accent,
          border: `1px solid ${alpha(colors.accent, 0.2)}`,
        },
      },
    },
    MuiPaper: {
      styleOverrides: { root: { backgroundImage: "none" } },
    },
  },
});

export default theme;
