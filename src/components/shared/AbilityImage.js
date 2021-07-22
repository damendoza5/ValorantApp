import React from "react";
import { Image, StyleSheet, View } from "react-native";
import theme from "../../theme";

const AbilityImage = ({ uuid, slot }) => {
	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={{
					uri: `https://media.valorant-api.com/agents/${uuid}/abilities/${slot.toLowerCase()}/displayicon.png`,
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginLeft: 25,
		marginVertical: 30,
		borderWidth: 1,
		borderColor: theme.colors.backgroundWhite,
		borderRadius: 10,
		overflow: "hidden",
	},
	image: {
		margin: 5,
		width: 50,
		height: 50,
		position: "relative",
		resizeMode: "contain",
	},
});

export default AbilityImage;
