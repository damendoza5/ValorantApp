import React from "react";
import { Image, StyleSheet, View } from "react-native";

const MapImage = ({ uuid }) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: `https://media.valorant-api.com/maps/${uuid}/splash.png`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 500,
    position: "relative",
    resizeMode: "cover",
    borderRadius: 30,
  },
});

export default MapImage;
