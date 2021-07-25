import React from "react";
import { Image } from "react-native";

const Credits = () => {
  return (
    <Image
      style={{ width: 20, height: 20 }}
      source={require("../../../assets/creds.png")}
    />
  );
};

export default Credits;
