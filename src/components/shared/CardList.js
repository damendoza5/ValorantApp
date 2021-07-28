import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Title } from "react-native-paper";
import PlayerCard from "./PlayerCard";
import theme from "../../theme";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const CardList = ({ card, navigation }) => {
  const emptyFlatlist = (
    <View style={styles.foundContainer}>
      <Title style={styles.title}>Card data not found</Title>
    </View>
  );

  return (
    <View>
      <FlatList
        style={styles.container}
        data={card.data}
        keyExtractor={(item) => item.uuid.toString()}
        numColumns={2}
        showsHorizontalScrollIndicator={true}
        ListEmptyComponent={emptyFlatlist}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              key={item.uuid}
              onPress={() => {
                navigation.navigate("CardDetails", { item });
              }}
            >
              <PlayerCard name={item.displayName} uuid={item.uuid} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom: deviceHeight * 0,
    marginTop: deviceHeight * 0,
    width: deviceWidth,
    paddingHorizontal: deviceWidth * 0.05,
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

export default CardList;
