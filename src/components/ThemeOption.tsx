import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";

type Props = {
  label: string;
  icon: React.ReactNode;
  selected?: boolean;
  onPress?: () => void;
};

export default function ThemeOption({ label, icon, selected, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.wrap, selected && styles.selected]}
    >
      <View style={styles.icon}>{icon}</View>
      <Text style={[styles.text, selected && styles.textSelected]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "rgba(255,255,255,0.18)",
    alignItems: "center",
    justifyContent: "center",
  },
  selected: {
    backgroundColor: "rgba(29,185,84,0.35)",
    borderWidth: 1,
    borderColor: "rgba(29,185,84,0.9)",
  },
  icon: { marginBottom: 6 },
  text: { color: "#d1d5db", fontSize: 12 },
  textSelected: { color: "#fff", fontWeight: "700" },
});
