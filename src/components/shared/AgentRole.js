import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Title, Text } from "react-native-paper";
import theme from "../../theme";

const AgentRole = ({ uuid, role }) => {
  return (
    <View style={styles.fullContainer}>
      <View style={styles.container1}>
        <Image
          style={styles.image}
          source={{
            uri: `https://media.valorant-api.com/agents/roles/${uuid}/displayicon.png`,
          }}
        />
      </View>
      <View style={styles.container2}>
        <Title style={styles.title}>{role.displayName}</Title>
        <Text style={styles.text}>{role.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullContainer: {
    flexDirection: "row",
  },
  container1: {
    marginLeft: 25,
    marginVertical: 30,
    borderWidth: 1,
    borderColor: theme.colors.backgroundWhite,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    margin: 5,
    width: 50,
    height: 50,
    position: "relative",
    resizeMode: "contain",
  },
  container2: {
    marginLeft: 15,
    marginVertical: 19,
    marginRight: 130,
  },
  title: {
    color: theme.colors.backgroundWhite,
    fontSize: 14,
  },
  text: {
    color: theme.colors.backgroundWhite,
    fontSize: 12,
    marginTop: -8,
  },
});

export default AgentRole;
