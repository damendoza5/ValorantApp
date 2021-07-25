import React from "react";
import { Image } from "react-native";

const Body = () => {
  return (
    <Image
      style={{ width: 70, height: 150 }}
      source={require("../../../assets/body.png")}
    />
  );
};

export default Body;
