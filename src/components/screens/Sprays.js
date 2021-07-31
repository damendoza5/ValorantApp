import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { fetchSprays } from "../../api";
import SprayList from "../shared/SprayList";
import theme from "../../theme";
import { ActivityIndicator } from "react-native-paper";

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
      {spray.data ? (
        <SprayList spray={spray} navigation={navigation} />
      ) : (
        <ActivityIndicator animating={true} color={theme.colors.redAccent} />
      )}
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
