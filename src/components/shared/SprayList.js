import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Title } from "react-native-paper";
import SprayPlayerCard from "./SprayCard";
import theme from "../../theme";

const deviceHeight = Dimensions.get("window").height;

const SprayList = ({ spray, navigation }) => {
  const emptyFlatlist = (
    <View style={styles.foundContainer}>
      <Title style={styles.title}>Spray data not found</Title>
    </View>
  );

  return (
    <View>
      <FlatList
        style={styles.container}
        data={spray.data}
        keyExtractor={(item) => item.uuid.toString()}
        numColumns={2}
        showsHorizontalScrollIndicator={true}
        ListEmptyComponent={emptyFlatlist}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              key={item.uuid}
              onPress={() => {
                navigation.navigate("SprayDetails", { item });
              }}
            >
              <SprayPlayerCard name={item.displayName} uuid={item.uuid} />
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

export default SprayList;
