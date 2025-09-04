import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "@/screens/SplashScreen";
import GetStartedScreen from "@/screens/GetStartedScreen";
import ChooseModeScreen from "@/screens/ChooseModeScreen";

export type RootStackParamList = {
  Splash: undefined;
  GetStarted: undefined;
  ChooseMode: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      <Stack.Screen name="ChooseMode" component={ChooseModeScreen} />
    </Stack.Navigator>
  );
}
