import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect, useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Button, MD3LightTheme as DefaultTheme, PaperProvider } from "react-native-paper";

import CreateEvent from "./Screens/AdminView/CreateEvent";
import Survey from "./Screens/AdminView/Survey";
import SurveyQuestions from "./Screens/AdminView/SurveyQuestions";
import Welcome from "./Screens/AdminView/Welcome";

const theme = {
  ...DefaultTheme,
};
const Stack = createNativeStackNavigator();
export default function App() {
  const [orientation, setOrientation] = useState(1);
  useEffect(() => {
    lockOrientation();
  }, []);
  const lockOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
    const o = await ScreenOrientation.getOrientationAsync();
    setOrientation(o);
  };
  return (
    <PaperProvider>
      <StatusBar hidden />

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Survey"
            component={Survey}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CreateEvent"
            component={CreateEvent}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SurveyQuestions"
            component={SurveyQuestions}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
});
