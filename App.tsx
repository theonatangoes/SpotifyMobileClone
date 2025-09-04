import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useMemo, useState } from "react";
import RootNavigator from "@/navigation/RootNavigator";
import { ThemeContext, theme as appTheme } from "@/theme/theme";
import { getStoredTheme, setStoredTheme } from "@/utils/storage";

export default function App() {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    (async () => {
      const saved = await getStoredTheme();
      if (saved) setColorScheme(saved);
    })();
  }, []);

  const setScheme = async (next: "light" | "dark") => {
    setColorScheme(next);
    await setStoredTheme(next);
  };

  const themeContextValue = useMemo(
    () => ({
      colorScheme,
      setColorScheme: setScheme,
      colors: appTheme[colorScheme],
    }),
    [colorScheme]
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <NavigationContainer
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
        <RootNavigator />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
