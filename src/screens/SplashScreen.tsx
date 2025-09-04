import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import Screen from "@/components/Screen";
import { colors } from "@/theme/theme";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/navigation/RootNavigator";

export default function SplashScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Splash">) {
  useEffect(() => {
    const t = setTimeout(() => navigation.replace("GetStarted"), 1400);
    return () => clearTimeout(t);
  }, [navigation]);

  return (
    <Screen>
      <View style={styles.container}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: { width: 160, height: 160, tintColor: colors.green },
});
