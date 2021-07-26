import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Title } from "react-native-paper";
import BarTop from "../../navigation/TopBar";
import theme from "../../../theme";
import { Entypo } from "@expo/vector-icons";
import Logo from "../../shared/logo";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const Customizables = ({ navigation }) => {
  return (
    <View style={styles.back}>
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
      <Title style={styles.title}>CUSTOMIZABLES</Title>
      <BarTop />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: theme.colors.backgroundWhite,
    bottom: deviceHeight * 0.01,
    top: deviceHeight * 0,
    left: deviceWidth * 0.07,
  },
  hamburguer: {
    top: deviceHeight * 0.02,
    left: deviceWidth * 0.05,
  },
  back: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: theme.colors.backgroundGreen,
  },
  logo: {
    bottom: deviceHeight * 0,
    left: deviceWidth * 0.75,
    width: 1,
  },
});

export default Customizables;
