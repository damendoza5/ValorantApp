import React, { useState, useEffect } from "react";
import { Title, Card } from "react-native-paper";
import { StyleSheet, View, Dimensions } from "react-native";
import Logo from "../shared/logo";
import { Entypo } from "@expo/vector-icons";
import theme from "../../theme";

const deviceWidth = Dimensions.get("screen").width;
const deviceHeight = Dimensions.get("screen").height;

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Entypo
          name="menu"
          size={34}
          color={theme.colors.backgroundWhite}
          style={styles.hamburguer}
          onPress={() => navigation.openDrawer()}
        />
        <View style={styles.logo}>
          <Logo />
        </View>
      </View>
      <View>
        <Title style={styles.title}>DISCOVER</Title>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: deviceWidth * 0.01,
    backgroundColor: theme.colors.backgroundGreen,
  },
  hamburguer: {
    bottom: deviceHeight * 0.32,
    left: deviceWidth * 0.05,
  },
  logo: {
    bottom: deviceHeight * 0.38,
    left: deviceWidth * 0.75,
  },
  title: {
    fontSize: 20,
    color: theme.colors.backgroundWhite,
    bottom: deviceHeight * 0.37,
    left: deviceWidth * 0.05,
  },
});

export default Home;
