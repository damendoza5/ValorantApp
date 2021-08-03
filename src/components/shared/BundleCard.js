import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import theme from "../../theme";
import BundleImage from "./BundleImage";

const BundleCard = ({ name, uuid }) => {
  const renderByImage = () => {
    if (
      uuid === "0dee7ef6-d3ea-400a-b15c-5b9524243439" ||
      uuid === "1703b166-4e32-63da-9d16-a7a144aab574"
    ) {
      return;
    } else {
      return (
        <View style={styles.container}>
          <BundleImage uuid={uuid} name={name} />
          <View>
            <Text style={styles.name}>{name.toUpperCase()}</Text>
          </View>
        </View>
      );
    }
  };
  return <View>{renderByImage()}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    marginHorizontal: 0,
  },
  name: {
    position: "relative",
    color: theme.colors.backgroundWhite,
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 55,
    marginTop: -55,
  },
});

export default BundleCard;
