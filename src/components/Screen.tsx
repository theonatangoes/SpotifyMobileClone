import React, { PropsWithChildren, useContext } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { ThemeContext } from "@/theme/theme";

export default function Screen({ children }: PropsWithChildren) {
  const { colors } = useContext(ThemeContext);
  return (
    <SafeAreaView style={[styles.root, { backgroundColor: colors.background }]}>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  content: { flex: 1 },
});
