import React, { useState } from "react";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Keyboard, Text, TextInput } from "react-native-paper";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

import sairam from "../../assets/sairam.jpg";

export default function Survey({ navigation }) {
  const [count, setCount] = useState("");
  const [name, setName] = useState("");
  //   console.log(name);
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
        <ScrollView
          keyboardShouldPersistTaps="never"
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>HEllo</Text>
          <Card
            mode="contained"
            style={{ height: verticalScale(70), margin: 10 }}
          >
            <Card.Content>
              <Text variant="displayMedium" style={{ color: "black" }}>
                The Survey Configuration
              </Text>
            </Card.Content>

            <Card.Actions></Card.Actions>
          </Card>
          <Card
            mode="contained"
            style={{
              height: verticalScale(140),
              margin: 10,
              width: scale(500),
            }}
          >
            <Card.Content>
              <Text variant="titleLarge">Number of Questions</Text>
              <Text variant="bodyMedium">
                Type the number of questions you want to ask?
              </Text>
            </Card.Content>

            <Card.Actions></Card.Actions>
            <TextInput
              label="Count"
              mode="outlined"
              value={count}
              onChangeText={(text) => setCount(text)}
            />
          </Card>
          <Card mode="contained" style={styles.card}>
            <Card.Content>
              <Text variant="titleLarge">Name of the Event</Text>
              <Text variant="bodyMedium">
                Type the name of the survey event?
              </Text>
            </Card.Content>

            <Card.Actions></Card.Actions>
            <TextInput
              label="Title"
              mode="outlined"
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <Button
              mode="contained"
              style={{ padding: 5, margin: 10 }}
              onPressIn={() => {
                navigation.navigate("SurveyQuestions", {
                  num: { count },
                  title: { name },
                });
              }}
            >
              Save and Proceed
            </Button>
          </Card>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    justifyContent: "center",
    margin: 100,
    flex: 1,
    flexDirection: "row",
  },
  card: {
    height: verticalScale(170),
    margin: 10,
    width: scale(500),
  },
});
