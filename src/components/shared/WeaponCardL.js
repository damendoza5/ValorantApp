import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Title } from "react-native-paper";
import WeaponCard from "./WeaponCard";
import theme from "../../theme";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const WeaponList = ({ weapon, navigation }) => {
  const emptyFlatlist = (
    <View style={styles.foundContainer}>
      <Title style={styles.title}>Weapon data not found</Title>
    </View>
  );

  return (
    <View>
      <FlatList
        style={styles.container}
        data={weapon.data}
        keyExtractor={(item) => item.uuid.toString()}
        showsHorizontalScrollIndicator={true}
        ListEmptyComponent={emptyFlatlist}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              key={item.uuid}
              onPress={() => {
                navigation.navigate("WeaponDetails", { item });
              }}
            >
              <WeaponCard name={item.displayName} uuid={item.uuid} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignSelf: "center",
    bottom: deviceHeight * 0,
    marginTop: deviceHeight * 0.1,
    marginBottom: deviceHeight * 0.07,
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

export default WeaponList;
