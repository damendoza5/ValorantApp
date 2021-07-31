import React, { useState, useEffect } from "react";
import { Title, Text, ActivityIndicator } from "react-native-paper";
import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import Logo from "../shared/logo";
import { Entypo } from "@expo/vector-icons";
import theme from "../../theme";
import { fetchBundles } from "../../api";
import { fetchMaps } from "../../api";
import MapList from "../shared/MapList";
import BundleList from "../shared/BundleList";

const deviceWidth = Dimensions.get("screen").width;
const deviceHeight = Dimensions.get("screen").height;

const Home = ({ navigation }) => {
  const [bundle, setBundle] = useState({});
  const [map, setMap] = useState({});

  const getBundle = async () => {
    const response = await fetchBundles();

    setBundle(response);
  };

  const getMap = async () => {
    const response = await fetchMaps();

    setMap(response);
  };

  useEffect(() => {
    getBundle();
    getMap();
  }, []);

  return (
    <ScrollView style={styles.container} bounces={false}>
      <View>
        <Entypo
          name="menu"
          size={34}
          color={theme.colors.backgroundWhite}
          style={styles.hamburguer}
          onPress={() => navigation.openDrawer()}
        />
        <View style={styles.logo}>
          <Logo />
        </View>
      </View>
      <View>
        <Title style={styles.title}>DISCOVER</Title>
      </View>
      <View>
        {bundle.data ? (
          <BundleList bundle={bundle} />
        ) : (
          <ActivityIndicator animating={true} color={theme.colors.redAccent} />
        )}
      </View>
      <Text style={styles.map}>MAPS</Text>
      <View>
        {map.data ? (
          <MapList map={map} />
        ) : (
          <ActivityIndicator animating={true} color={theme.colors.redAccent} />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: deviceWidth * 0.01,
    backgroundColor: theme.colors.backgroundGreen,
  },
  hamburguer: {
    top: deviceHeight * 0.09,
    left: deviceWidth * 0.1,
  },
  logo: {
    top: deviceHeight * 0.03,
    left: deviceWidth * 0.75,
  },
  title: {
    fontSize: 20,
    color: theme.colors.backgroundWhite,
    top: deviceHeight * 0.06,
    left: deviceWidth * 0.1,
  },
  map: {
    paddingTop: deviceHeight * 0.03,
    paddingLeft: deviceWidth * 0.09,
    fontSize: 18,
    fontWeight: "bold",
    color: theme.colors.backgroundWhite,
  },
});

export default Home;
