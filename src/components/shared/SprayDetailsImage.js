import React from "react";
import { Image, StyleSheet, View } from "react-native";

const SprayDetailsImage = ({ uuid }) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: `https://media.valorant-api.com/sprays/${uuid}/fulltransparenticon.png`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 350,
    alignSelf: "center",
    position: "relative",
    resizeMode: "contain",
    borderRadius: 15,
    margin: 15,
  },
});

export default SprayDetailsImage;
