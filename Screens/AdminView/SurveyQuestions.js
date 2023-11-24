import React from "react";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

import sairam from "../../assets/sairam1.jpg";
import QuestionsAndOptionsInput from "../../Components/QuestionsAndOptionsInput";

export default function SurveyQuestions({ route, navigation }) {
  const { num, title } = route.params;
  let count = parseInt(num.count);
  let name = title.name;
  let qboxes = [];
  for (let i = 1; i <= count; i++) {
    qboxes.push(
      <View>
        <QuestionsAndOptionsInput qnumber={i} title={name} />
      </View>
    );
  }

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
          margin: 10,
        }}
      >
        <ScrollView
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {qboxes}
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
    height: verticalScale(230),
    margin: 50,
    width: scale(250),
  },
});
