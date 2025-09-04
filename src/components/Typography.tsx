import React, { PropsWithChildren, useContext } from "react";
import { Text, TextProps } from "react-native";
import { ThemeContext } from "@/theme/theme";

export function Title({
  children,
  style,
  ...rest
}: PropsWithChildren<TextProps>) {
  const { colors } = useContext(ThemeContext);
  return (
    <Text
      {...rest}
      style={[{ color: colors.text, fontWeight: "700", fontSize: 24 }, style]}
    >
      {children}
    </Text>
  );
}

export function Paragraph({
  children,
  style,
  ...rest
}: PropsWithChildren<TextProps>) {
  const { colors } = useContext(ThemeContext);
  return (
    <Text
      {...rest}
      style={[
        { color: colors.subtleText, fontSize: 14, lineHeight: 20 },
        style,
      ]}
    >
      {children}
    </Text>
  );
}
