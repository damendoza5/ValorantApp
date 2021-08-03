import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Text } from "react-native-paper";
import theme from "../../theme";
import MapImage from "./MapImage";

const deviceWidth = Dimensions.get("window").width;

const MapCard = ({ name, uuid, coordinates }) => {
	return (
		<View style={styles.container}>
			<MapImage uuid={uuid} name={name} />
			<View>
				<Text style={styles.name}>{name.toUpperCase()}</Text>
				<Text style={styles.coordinates}>{coordinates}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginVertical: 30,
		marginHorizontal: 20,
	},
	name: {
		position: "relative",
		color: theme.colors.backgroundWhite,
		fontWeight: "bold",
		fontSize: 16,
		marginLeft: 25,
		marginTop: -75,
	},
	coordinates: {
		fontSize: 10,
		color: theme.colors.backgroundWhite,
		marginLeft: 25,
		marginBottom: -15,
	},
});

export default MapCard;
