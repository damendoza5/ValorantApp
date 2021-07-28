import React from "react";
import { Image, StyleSheet, View } from "react-native";

const CardDetailsImage = ({ uuid }) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: `https://media.valorant-api.com/playercards/${uuid}/largeart.png`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 410,
    alignSelf: "center",
    position: "relative",
    resizeMode: "contain",
  },
});

export default CardDetailsImage;
