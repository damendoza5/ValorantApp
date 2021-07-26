import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { fetchSprays } from "../../api";
import SprayList from "../shared/SprayList";
import theme from "../../theme";

const Sprays = ({ navigation }) => {
  const [spray, setSpray] = useState({});

  const getSpray = async () => {
    const response = await fetchSprays();

    setSpray(response);
  };

  useEffect(() => {
    getSpray();
  }, []);

  return (
    <View style={styles.back}>
      <SprayList spray={spray} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: theme.colors.backgroundGreen,
  },
});

export default Sprays;
