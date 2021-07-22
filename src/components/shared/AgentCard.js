import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Card } from "react-native-paper";
import theme from "../../theme";
import AgentImage from "./AgentImage";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AgentsCard = ({ name, role, uuid }) => {
	return (
		<Card style={styles.container}>
			<Card.Content>
				<AgentImage uuid={uuid} />
				<View>
					<Text style={styles.name}>{name.toUpperCase()}</Text>
					<Text>
						{role.map((role) => (
							<Text key={role.uuid}>{role.displayName}</Text>
						))}
					</Text>
				</View>
			</Card.Content>
		</Card>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 500,
		width: windowWidth - 40,
		margin: 20,
		backgroundColor: theme.colors.redAccent,
		borderRadius: 50,
	},
	name: {
		position: "relative",
		alignSelf: "center",
		color: theme.colors.backgroundWhite,
		fontWeight: "bold",
		fontSize: 23,
	},
});

export default AgentsCard;
