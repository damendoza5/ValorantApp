import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { Card } from "react-native-paper";
import theme from "../../theme";
import WeaponImage from "./WeaponImage";

const deviceWidth = Dimensions.get("window").width;

const WeaponCard = ({ name, uuid }) => {
  const renderByWeapon = () => {
    if (
      uuid === "29a0cfab-485b-f5d5-779a-b59f85e204a8" ||
      uuid === "44d4e95c-4157-0037-81b2-17841bf2e8e3"
    ) {
      return (
        <Card style={styles.container}>
          <Card.Content>
            <WeaponImage uuid={uuid} />
            <View>
              <Text style={styles.nameSmall}>{name.toUpperCase()}</Text>
            </View>
          </Card.Content>
        </Card>
      );
    } else {
      return (
        <Card style={styles.container}>
          <Card.Content>
            <WeaponImage uuid={uuid} />
            <View>
              <Text style={styles.name}>{name.toUpperCase()}</Text>
            </View>
          </Card.Content>
        </Card>
      );
    }
  };

  return <View>{renderByWeapon()}</View>;
};

const styles = StyleSheet.create({
  container: {
    height: 210,
    width: deviceWidth * 0.9,
    margin: 10,
    backgroundColor: theme.colors.redAccent,
    borderRadius: 30,
  },
  name: {
    top: -50,
    position: "relative",
    alignSelf: "center",
    color: theme.colors.backgroundWhite,
    fontWeight: "bold",
    fontSize: 20,
  },
  nameSmall: {
    top: 50,
    position: "relative",
    alignSelf: "center",
    color: theme.colors.backgroundWhite,
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default WeaponCard;
