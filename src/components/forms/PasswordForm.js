import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Caption, TextInput, Text } from "react-native-paper";
import theme from "../../theme";
import { AntDesign } from "@expo/vector-icons";
import { Context as AuthContext } from "../../providers/AuthContext";

const ForgotPasswordForm = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState(false);
	const { state, forgotPassword } = useContext(AuthContext);

	function handleVerify(input) {
		if (input === "email") {
			if (!email) setEmailError(true);
			else setEmailError(false);
		} else if (input === "forgotPassword") {
			if (email && !emailError) {
				forgotPassword(email);
			}
		}
	}

	return (
		<View>
			{state.errorMessage !== null && (
				<Text style={styles.textError}>{state.errorMessage}</Text>
			)}
			<Text>Enter a Registered Email</Text>
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
			{emailError && <Caption>Please enter a registered Email</Caption>}

			<Button
				mode="contained"
				style={styles.button}
				onPress={() => handleVerify("forgotPassword")}
			>
				<AntDesign
					name="right"
					size={24}
					color={theme.colors.backgroundWhite}
				/>
			</Button>
		</View>
	);
};
