import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { Card } from "react-native-paper";
import theme from "../../theme";
import AgentImage from "./AgentImage";

const AgentsCard = ({ name, role, uuid }) => {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <AgentImage uuid={uuid} />
        <View>
          <Text style={styles.name}>{name.toUpperCase()}</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 500,
    width: 370,
    margin: 20,
    backgroundColor: theme.colors.redAccent,
    borderRadius: 50,
  },
  name: {
    position: "relative",
    alignSelf: "center",
    color: theme.colors.backgroundWhite,
    fontWeight: "bold",
    fontSize: 23,
  },
});

export default AgentsCard;
