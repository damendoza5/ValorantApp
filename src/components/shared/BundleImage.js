import React from "react";
import { Image, StyleSheet, View } from "react-native";

const BundleImage = ({ uuid }) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: `https://media.valorant-api.com/bundles/${uuid}/verticalpromoimage.png`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 500,
    position: "relative",
    resizeMode: "contain",
    borderRadius: 30,
  },
});

export default BundleImage;
