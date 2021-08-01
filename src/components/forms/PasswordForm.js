import React, { useState, useContext } from "react";
import { StyleSheet, View, Modal, Pressable } from "react-native";
import { Button, Caption, TextInput, Text } from "react-native-paper";
import theme from "../../theme";
import { AntDesign } from "@expo/vector-icons";
import { Context as AuthContext } from "../../providers/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
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
});

export default ForgotPasswordForm;
