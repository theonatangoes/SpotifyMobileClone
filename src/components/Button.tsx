import React, { PropsWithChildren } from "react";
import { Pressable, Text, StyleSheet, ViewStyle } from "react-native";
import { colors } from "@/theme/theme";

type Props = PropsWithChildren<{
  onPress?: () => void;
  style?: ViewStyle;
  disabled?: boolean;
}>;

export default function Button({ children, onPress, style, disabled }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        pressed && { opacity: 0.9 },
        disabled && { opacity: 0.6 },
        style,
      ]}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.green,
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
