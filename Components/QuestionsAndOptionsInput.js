import React, { useState } from "react";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Keyboard, Text, TextInput } from "react-native-paper";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

export default function QuestionsAndOptionsInput({ qnumber, title }) {
  return (
    <View>
      <Card mode="contained" style={{ height: verticalScale(70), margin: 10 }}>
        <Card.Content>
          <Text variant="displayMedium" style={{ color: "black" }}>
            The Question setup
          </Text>
        </Card.Content>

        <Card.Actions></Card.Actions>
      </Card>
      <Card
        mode="contained"
        style={{
          height: verticalScale(370),
          margin: 10,
          width: scale(500),
        }}
      >
        <Card.Content>
          <Text variant="titleLarge">Survey Question Number {qnumber}</Text>
          <Text variant="bodyMedium">
            Type the Survey Question to be asked Question
          </Text>
        </Card.Content>

        <Card.Actions></Card.Actions>
        <TextInput
          label="Count"
          mode="outlined"
          // value={count}
          // onChangeText={(text) => setCount(text)}
        />
        <Text variant="bodyMedium">Type the option number 1.</Text>
        <TextInput
          label="Count"
          mode="outlined"
          // value={count}
          // onChangeText={(text) => setCount(text)}
        />
        <Text variant="bodyMedium">Type the option number 2</Text>
        <TextInput
          label="Count"
          mode="outlined"
          // value={count}
          // onChangeText={(text) => setCount(text)}
        />
        <Text variant="bodyMedium">Type the option number 3</Text>
        <TextInput
          label="Count"
          mode="outlined"
          // value={count}
          // onChangeText={(text) => setCount(text)}
        />
        <Text variant="bodyMedium">Type the option number 4</Text>
        <TextInput
          label="Count"
          mode="outlined"
          // value={count}
          // onChangeText={(text) => setCount(text)}
        />
      </Card>
    </View>
  );
}
