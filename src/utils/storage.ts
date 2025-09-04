import AsyncStorage from "@react-native-async-storage/async-storage";

const THEME_KEY = "app:theme";

export async function getStoredTheme(): Promise<"light" | "dark" | null> {
  try {
    const v = await AsyncStorage.getItem(THEME_KEY);
    return v === "light" || v === "dark" ? v : null;
  } catch (e) {
    return null;
  }
}

export async function setStoredTheme(v: "light" | "dark") {
  try {
    await AsyncStorage.setItem(THEME_KEY, v);
  } catch {}
}
