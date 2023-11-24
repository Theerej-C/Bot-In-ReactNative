import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

import sairam from "../../assets/sairam.jpg";

const right = (props) => <Avatar.Icon {...props} icon="advertisements" />;

const LeftContent = (props) => <Avatar.Icon {...props} icon="account-group" />;
export default function CreateEvent({ navigation }) {
  return (
    <View style={styles.view}>
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
        <Card mode="contained" style={styles.card}>
          <Card.Title title="The Survey" left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">Survey</Text>
            <Text variant="bodyMedium">
              This is the Survey setting prop.If you want to take survey press
              the survey button
            </Text>
          </Card.Content>

          <Card.Actions></Card.Actions>
          <Button
            mode="contained"
            style={{ padding: 5, margin: 20 }}
            onPress={() => navigation.navigate("Survey")}
          >
            Survey
          </Button>
        </Card>
        <Card mode="contained" style={styles.card}>
          <Card.Title title="Advertisements" left={right} />
          <Card.Content>
            <Text variant="titleLarge">Advertisements</Text>
            <Text variant="bodyMedium">
              This is the Advertisements .If you want to present advertisements
              press the advertisement button
            </Text>
          </Card.Content>

          <Card.Actions></Card.Actions>
          <Button mode="contained" style={{ padding: 5, margin: 20 }}>
            Advertisements
          </Button>
        </Card>
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
