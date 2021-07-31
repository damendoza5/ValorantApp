import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Title, ActivityIndicator } from "react-native-paper";
import { fetchAgents } from "../../api";
import AgentList from "../shared/AgentCardL";
import { Entypo } from "@expo/vector-icons";
import theme from "../../theme";
import Logo from "../shared/logo";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const Agents = ({ navigation }) => {
  const [agent, setAgent] = useState({});

  const getAgent = async () => {
    const response = await fetchAgents();

    setAgent(response);
  };

  useEffect(() => {
    getAgent();
  }, []);

  return (
    <View style={styles.back}>
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
      <Title style={styles.title}>AGENTS</Title>
      {agent.data ? (
        <AgentList agent={agent} navigation={navigation} />
      ) : (
        <ActivityIndicator animating={true} color={theme.colors.redAccent} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: theme.colors.backgroundWhite,
    bottom: deviceHeight * 0.01,
    top: deviceHeight * 0,
    left: deviceWidth * 0.09,
  },
  hamburguer: {
    top: deviceHeight * 0.04,
    left: deviceWidth * 0.09,
  },
  back: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: theme.colors.backgroundGreen,
  },
  logo: {
    bottom: deviceHeight * 0.025,
    left: deviceWidth * 0.75,
    width: 1,
  },
});

export default Agents;
