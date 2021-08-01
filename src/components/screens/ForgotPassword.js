import React from "react";
import { StyleSheet, TouchableOpacity, View, Dimensions } from "react-native";
import { Title, Text } from "react-native-paper";
import theme from "../../theme";
import Logo from "../shared/logo";
import ForgotPasswordForm from "../forms/PasswordForm";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const PasswordScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Logo />
				<Text style={styles.slogan}>"DEFY THE LIMITS"</Text>
			</View>
			<View style={styles.signContainer}>
				<Title style={styles.title}></Title>
				<ForgotPasswordForm />
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

	forgotText: {
		textDecorationLine: "underline",
		color: theme.colors.grayOscuro,
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
		alignItems: "center",
		top: deviceHeight * 0.09,
		right: deviceWidth * 0.33,
	},
	slogan: {
		color: theme.colors.redAccent,
		marginTop: "7%",
	},
});

export default PasswordScreen;
