import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Button, Surface } from "react-native-paper";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

import sairam from "../../assets/sairam.jpg";

export default function Welcome({ navigation }) {
  return (
    <View>
      <ImageBackground
        source={sairam}
        resizeMode="cover"
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: verticalScale(310),
          width: scale(800),
        }}
      >
        <Button
          icon="creation"
          mode="contained-tonal"
          onPress={() => navigation.navigate("CreateEvent")}
          style={styles.button}
        >
          <Text
            style={{
              fontSize: 20,
              textShadowColor: "#6e9cec",
              textShadowRadius: 20,
              textShadowOffset: { width: 2, height: 1 },
            }}
          >
            Create An event
          </Text>
        </Button>
        <Button icon="creation" mode="contained-tonal" style={styles.button}>
          <Surface style={styles.surface} elevation={5}></Surface>
          <Text
            style={{
              fontSize: 20,
              textShadowColor: "#6e9cec",
              textShadowRadius: 20,
              textShadowOffset: { width: 2, height: 1 },
            }}
          >
            Select Exisiting Event
          </Text>
        </Button>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: verticalScale(70),
    width: scale(250),
    padding: moderateScale(10),
    borderRadius: 30,
    justifyContent: "center",
    margin: 20,
  },
  surface: {
    alignItems: "center",
    justifyContent: "center",
  },
});
