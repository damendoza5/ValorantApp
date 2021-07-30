import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Caption, TextInput, Text } from "react-native-paper";
import theme from "../../theme";
import { AntDesign } from "@expo/vector-icons";
import { Context as AuthContext } from "../../providers/AuthContext";

const ForgotPassword = () => {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [passwordError, setPasswordError] = useState(false);
	const [confirmPasswordError, setConfirmPasswordError] = useState(false);
};
