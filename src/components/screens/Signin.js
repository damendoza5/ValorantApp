import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Title, Text } from "react-native-paper";
import SigninForm from "../forms/SigninForm";
import theme from "../../theme";
import Logo from "../shared/logo";

function Signin({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
        <Text style={styles.slogan}>"DEFY THE LIMITS"</Text>
      </View>
      <View style={styles.signContainer}>
        <Title style={styles.title}>SIGN IN</Title>
        <SigninForm />
        <View style={styles.forgotPassword}>
          <Text style={styles.forgotText}>Forgot password</Text>
        </View>
        <View style={styles.signup}>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text styles={styles.signText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: theme.colors.backgroundGreen,
  },
  forgotPassword: {
    marginTop: "10%",
    position: "relative",
    alignSelf: "flex-start",
  },
  forgotText: {
    textDecorationLine: "underline",
    color: theme.colors.grayOscuro,
  },
  signup: {
    marginTop: -20,
    position: "relative",
    alignSelf: "flex-end",
  },
  signText: {
    textDecorationLine: "underline",
    color: theme.colors.grayOscuro,
  },
  title: {
    marginBottom: "8%",
    marginTop: "12%",
  },
  signContainer: {
    marginTop: "80%",
    marginHorizontal: -10,
    backgroundColor: theme.colors.backgroundWhite,
    borderRadius: 30,
    paddingBottom: "40%",
    paddingHorizontal: "10%",
    bottom: 0,
  },
  logoContainer: {
    position: "absolute",
    top: "10%",
    right: "35%",
  },
  slogan: {
    color: theme.colors.redAccent,
    marginTop: "7%",
  },
});

export default Signin;
