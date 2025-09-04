import React from "react";

export const colors = {
  green: "#1DB954",
  greenDark: "#169E46",
  white: "#FFFFFF",
  black: "#000000",
  gray100: "#f3f4f6",
  gray300: "#d1d5db",
  gray700: "#374151",
  overlay: "rgba(0,0,0,0.55)",
};

export const theme = {
  light: {
    background: colors.white,
    text: "#111827",
    subtleText: "#4b5563",
    card: "#f9fafb",
    buttonText: colors.white,
  },
  dark: {
    background: "#0B0B0B",
    text: colors.white,
    subtleText: "#9ca3af",
    card: "#111111",
    buttonText: colors.white,
  },
};

export type ThemeContextType = {
  colorScheme: "light" | "dark";
  setColorScheme: (s: "light" | "dark") => void;
  colors: typeof theme.dark | typeof theme.light;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  colorScheme: "dark",
  setColorScheme: () => {},
  colors: theme.dark,
});
