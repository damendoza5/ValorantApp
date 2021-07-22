import React from "react";
import {
	FlatList,
	StyleSheet,
	View,
	TouchableOpacity,
	Dimensions,
} from "react-native";
import { Title } from "react-native-paper";
import AgentsCard from "./AgentCard";
import theme from "../../theme";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AgentList = ({ agent, navigation }) => {
	const emptyFlatlist = (
		<View style={styles.foundContainer}>
			<Title style={styles.title}>Agent data not found</Title>
		</View>
	);

	return (
		<View>
			<FlatList
				style={styles.container}
				data={agent.data}
				keyExtractor={(item) => item.uuid.toString()}
				horizontal
				showsHorizontalScrollIndicator={true}
				ListEmptyComponent={emptyFlatlist}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							key={item.uuid}
							onPress={() => {
								navigation.navigate("AgentDetails", { item });
							}}
						>
							<AgentsCard
								desc={item.description}
								name={item.displayName}
								role={item.role}
								img={item.fullPortrait}
								uuid={item.uuid}
							/>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		bottom: "15%",
	},
	foundContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		color: theme.colors.backgroundWhite,
	},
});

export default AgentList;
