import { NavigationContainer } from "@react-navigation/native";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { PaperProvider } from "react-native-paper";
import CreateEvent from "./Screens/AdminView/CreateEvent";
import Survey from "./Screens/AdminView/Survey";
import Welcome from "./Screens/AdminView/Welcome";
import { Stack } from "./App";

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
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
