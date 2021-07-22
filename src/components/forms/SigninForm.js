import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Caption, Text, TextInput } from "react-native-paper";
import theme from "../../theme";
import { AntDesign } from "@expo/vector-icons";

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
