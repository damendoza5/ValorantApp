import React, { useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Caption, Text, TextInput } from "react-native-paper";
import theme from "../../theme";
import { AntDesign } from "@expo/vector-icons";
import { Context as AuthContext } from "../../providers/AuthContext";

<<<<<<< HEAD
function SigninForm() {
	const { state, signin } = useContext(AuthContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [error, setError] = useState("");

	function handleVerify(input) {
		if (input === "email") {
			if (!email) setEmailError(true);
			else setEmailError(false);
		} else if (input === "password") {
			if (!password) setPasswordError(true);
			else setPasswordError(false);
		} else if (input === "signin") {
			if (email && password && !emailError && !passwordError) {
				signin(email, password);
			}
		}
	}

	return (
		<View>
			{state.errorMessage !== null && <Text>{state.errorMessage}</Text>}
			<TextInput
				mode="outlined"
				label="Email"
				autoCapitalize="none"
				textContentType="emailAddress"
				onChangeText={setEmail}
				value={email}
				onBlur={() => handleVerify("email")}
				style={styles.textInput1}
			/>
			{emailError && <Caption>Please enter your email</Caption>}
			<TextInput
				mode="outlined"
				label="Password"
				autoCapitalize="none"
				secureTextEntry
				textContentType="password"
				onChangeText={setPassword}
				value={password}
				onBlur={() => handleVerify("password")}
				style={styles.textInput2}
			/>
			{passwordError && <Caption>Please enter your password</Caption>}
			<Button
				mode="contained"
				style={styles.button}
				onPress={() => handleVerify("signin")}
			>
				<AntDesign
					name="right"
					size={24}
					color={theme.colors.backgroundWhite}
				/>
			</Button>
		</View>
	);
=======
function SigninForm({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  function handleVerify(input) {
    if (input === "email") {
      if (!email) setEmailError(true);
      else setEmailError(false);
    } else if (input === "password") {
      if (!password) setPasswordError(true);
      else setPasswordError(false);
    }
  }

  return (
    <View>
      <TextInput
        mode="outlined"
        label="Email"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
        onBlur={() => handleVerify("email")}
        style={styles.textInput1}
      />
      {emailError && (
        <Caption>Por favor ingresa tu cuenta de correo electrónico</Caption>
      )}
      <TextInput
        mode="outlined"
        label="Password"
        autoCapitalize="none"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
        onBlur={() => handleVerify("password")}
        style={styles.textInput2}
      />
      {passwordError && <Caption>Por favor ingresa tu contraseña</Caption>}
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate("AppIndex")}
      >
        <AntDesign
          name="right"
          size={24}
          color={theme.colors.backgroundWhite}
        />
      </Button>
    </View>
  );
>>>>>>> 9a28f98c61ef4ee207f2e489c7c616c9b9ddaa71
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
    backgroundColor: theme.colors.redAccent,
  },
  textInput1: {
    backgroundColor: theme.colors.blueClaro,
    marginVertical: "2%",
  },
  textInput2: {
    backgroundColor: theme.colors.blueClaro,
  },
});

export default SigninForm;
