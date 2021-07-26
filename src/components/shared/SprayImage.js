import React from "react";
import { Image, StyleSheet, View } from "react-native";
import getEnvVars from "../../../environment";

const SprayImage = ({ uuid }) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: `https://media.valorant-api.com/sprays/${uuid}/displayicon.png`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    alignSelf: "center",
    position: "relative",
    resizeMode: "contain",
    borderRadius: 15,
    margin: 15,
  },
});

export default SprayImage;
