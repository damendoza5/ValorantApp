import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Caption, TextInput } from "react-native-paper";
import theme from "../../theme";
import { AntDesign } from '@expo/vector-icons'; 

function SignupForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullnameError, setFullnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  function handleVerify(input) {
    if (input === "fullname") {
      if (!fullname) setFullnameError(true);
      else setFullnameError(false);
    } else if (input === "email") {
      if (!email) setEmailError(true);
      else setEmailError(false);
    } else if (input === "password") {
      if (!password) setPasswordError(true);
      else setPasswordError(false);
    } else if (input === "confirmPassword") {
      if (!confirmPassword) setConfirmPasswordError(true);
      else setConfirmPasswordError(false);
    }
  }

  return (
    <View>
      <TextInput
        mode="outlined"
        label="Fullname"
        value={fullname}
        onChangeText={setFullname}
        style={styles.textInput1}
        onBlur={() => handleVerify("fullname")}
      />
      {fullnameError && <Caption>Please enter your fullname</Caption>}
      <TextInput
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={styles.textInput1}
        onBlur={() => handleVerify("email")}
      />
      {emailError && <Caption>Please enter your email address</Caption>}
      <TextInput
        mode="outlined"
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        style={styles.textInput1}
        secureTextEntry
        onBlur={() => handleVerify("password")}
      />
      {passwordError && <Caption>Please enter a password</Caption>}
      <TextInput
        mode="outlined"
        label="Confirm password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        autoCapitalize="none"
        style={styles.textInput2}
        secureTextEntry
        onBlur={() => handleVerify("confirmPassword")}
      />
      {confirmPasswordError && (
        <Caption>Please enter your password confirmation</Caption>
      )}
      <Button mode="contained" style={styles.button}>
        <AntDesign name="right" size={24} color={theme.colors.backgroundWhite} />
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-end",
    position: "relative",
    marginTop: "15%",
    marginBottom: 20,
    width: 107,
    padding: 15,
    borderRadius: 20,
    backgroundColor: theme.colors.redAccent
  },
  textInput1: {
    backgroundColor: theme.colors.blueClaro,
    marginVertical: "2%"
  },
  textInput2: {
    backgroundColor: theme.colors.blueClaro,
  }
});

export default SignupForm;