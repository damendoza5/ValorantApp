import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { Card } from "react-native-paper";
import theme from "../../theme";
import SprayImage from "./SprayImage";

const SprayPlayerCard = ({ name, uuid }) => {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <View>
          <Text style={styles.name}>{name.toUpperCase()}</Text>
        </View>
        <SprayImage uuid={uuid} />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: 180,
    margin: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: theme.colors.backgroundWhite,
    backgroundColor: theme.colors.backgroundGreen,
    position: "relative",
    alignItems: "center",
  },
  name: {
    position: "relative",
    alignSelf: "center",
    color: theme.colors.backgroundWhite,
    fontSize: 10,
  },
});

export default SprayPlayerCard;
