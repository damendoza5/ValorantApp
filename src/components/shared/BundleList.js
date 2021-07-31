import React from "react";
import { FlatList, StyleSheet, View, Dimensions } from "react-native";
import { Title } from "react-native-paper";
import BundleCard from "./BundleCard";
import theme from "../../theme";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const BundleList = ({ bundle }) => {
  const emptyFlatlist = (
    <View style={styles.foundContainer}>
      <Title style={styles.title}>Bundle data not found</Title>
    </View>
  );

  return (
    <View>
      <FlatList
        style={styles.container}
        data={bundle.data}
        keyExtractor={(item) => item.uuid.toString()}
        horizontal
        showsHorizontalScrollIndicator={true}
        ListEmptyComponent={emptyFlatlist}
        renderItem={({ item }) => {
          return (
            <View key={item.uuid}>
              <BundleCard name={item.displayName} uuid={item.uuid} />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom: deviceHeight * 0,
    marginTop: deviceHeight * 0.07,
    paddingLeft: deviceWidth * 0.05,
  },
  foundContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    color: theme.colors.backgroundWhite,
  },
});

export default BundleList;
