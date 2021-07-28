import React from "react";
import { StyleSheet, TouchableOpacity, View, Dimensions } from "react-native";
import { Text } from "react-native-paper";
import { Title } from "react-native-paper";
import theme from "../../theme";
import SignupForm from "../forms/SingupForm";
import Logo from "../shared/logo";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
        <Text style={styles.slogan}>"DEFY THE LIMITS"</Text>
      </View>
      <View style={styles.signContainer}>
        <Title style={styles.title}>SIGN UP</Title>
        <SignupForm />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.signin}>
            Already got an account? <Text style={styles.signin}>Sign in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 0,
    backgroundColor: theme.colors.backgroundGreen,
  },
  signin: {
    color: theme.colors.grayOscuro,
    textDecorationLine: "underline",
    bottom: deviceHeight * 0.01,
  },
  title: {
    marginBottom: "8%",
    marginTop: "12%",
  },
  accountSign: {
    marginTop: "10%",
    position: "relative",
    alignSelf: "flex-start",
  },
  logoContainer: {
    position: "absolute",
    alignItems: "center",
    top: deviceHeight * 0.09,
    right: deviceWidth * 0.33,
  },
  slogan: {
    color: theme.colors.redAccent,
    marginTop: "7%",
  },
  signContainer: {
    marginTop: deviceHeight * 0.45,
    marginHorizontal: -10,
    backgroundColor: theme.colors.backgroundWhite,
    borderRadius: 30,
    paddingBottom: deviceHeight * 0.2,
    paddingHorizontal: "10%",
    bottom: 0,
  },
});

export default Signup;
