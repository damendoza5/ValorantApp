import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Title, Caption, Drawer, Avatar, Text } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import theme from "../../theme";
import { Context as AuthProvider } from "../../providers/AuthContext";
import * as Font from "expo-font";

const DrawerContent = ({ props, navigation }) => {
	const { signout } = useContext(AuthProvider);
	const [font, setFont] = useState(false);

	const loadFonts = async () => {
		await Font.loadAsync({
			ValorantFont: require("../../../assets/fonts/SFUIDisplay-Medium.ttf"),
		});
		setFont(true);
	};

	useEffect(() => {
		loadFonts();
	}, []);

	if (font === true) {
		return (
			<View style={{ flex: 1 }}>
				<DrawerContentScrollView {...props}>
					<View style={styles.drawerContent}>
						<View style={styles.userInfoSection}>
							<View style={{ flexDirection: "row", marginTop: 15 }}>
								<Avatar.Image
									source={require("../../../assets/radianite-logo.png")}
									size={50}
									style={{ backgroundColor: theme.colors.backgroundGreen }}
								></Avatar.Image>
								<View style={{ marginLeft: 15, flexDirection: "column" }}>
									<Caption style={styles.caption}>Welcome,</Caption>
									<Title style={styles.title}>Agent</Title>
								</View>
							</View>
							<Drawer.Section style={styles.drawerSection}>
								<DrawerItem
									icon={() => (
										<Entypo
											name="home"
											size={24}
											color={theme.colors.redAccent}
										/>
									)}
									label={() => (
										<Text style={{ color: theme.colors.redAccent }}>Home</Text>
									)}
									onPress={() => {
										navigation.navigate("Home");
									}}
								/>
								<DrawerItem
									icon={() => (
										<Fontisto
											name="persons"
											size={24}
											color={theme.colors.redAccent}
										/>
									)}
									label={() => (
										<Text style={{ color: theme.colors.redAccent }}>
											Agents
										</Text>
									)}
									onPress={() => {
										navigation.navigate("Agents");
									}}
								/>
								<DrawerItem
									icon={() => (
										<MaterialCommunityIcons
											name="pistol"
											size={24}
											color={theme.colors.redAccent}
										/>
									)}
									label={() => (
										<Text style={{ color: theme.colors.redAccent }}>
											Weapons
										</Text>
									)}
									onPress={() => {
										navigation.navigate("Weapons");
									}}
								/>
								<DrawerItem
									icon={() => (
										<FontAwesome5
											name="spray-can"
											size={24}
											color={theme.colors.redAccent}
										/>
									)}
									label={() => (
										<Text style={{ color: theme.colors.redAccent }}>
											Customizables
										</Text>
									)}
									onPress={() => {
										navigation.navigate("Customizables");
									}}
								/>
							</Drawer.Section>
						</View>
					</View>
				</DrawerContentScrollView>
				<Drawer.Section style={styles.bottomDrawerSection}>
					<DrawerItem
						icon={() => (
							<Entypo
								name="log-out"
								size={24}
								color={theme.colors.grayOscuro}
							/>
						)}
						label={() => (
							<Text style={{ color: theme.colors.grayOscuro }}>Sign Out</Text>
						)}
						onPress={signout}
						style={styles.option}
					/>
				</Drawer.Section>
			</View>
		);
	} else {
		return null;
	}
};

const styles = StyleSheet.create({
	drawerContent: {
		flex: 1,
	},
	userInfoSection: {
		paddingLeft: 20,
	},
	title: {
		fontSize: 16,
		marginTop: 3,
		fontWeight: "bold",
		color: theme.colors.backgroundWhite,
		fontFamily: "ValorantFont",
	},
	caption: {
		fontSize: 14,
		lineHeight: 14,
		color: theme.colors.backgroundWhite,
		fontFamily: "ValorantFont",
	},
	row: {
		marginTop: 20,
		flexDirection: "row",
		alignItems: "center",
	},
	section: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 15,
	},
	drawerSection: {
		marginTop: 15,
	},
	bottomDrawerSection: {
		marginBottom: 15,
		borderTopColor: "#f4f4f4",
	},
});

export default DrawerContent;
