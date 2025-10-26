// /app/admin/theme/MuiThemeProvider.jsx
"use client";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1A237E" },         // copy from repo
    secondary: { main: "#FF6F00" },       // copy from repo
    background: {
      default: "#F9FAFB",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1F1F1F",
      secondary: "#6B7280",
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily:
      "var(--font-open-sans), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
    h1: { fontWeight: 600, fontSize: "2rem" },
    h2: { fontWeight: 600, fontSize: "1.5rem" },
    h3: { fontWeight: 600, fontSize: "1.25rem" },
    body1: { fontSize: "1rem", lineHeight: 1.5 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  // if the repo defines shadows, components overrides, etc — paste them here too
});

export default function MuiThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
