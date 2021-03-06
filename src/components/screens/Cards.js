import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { fetchCards } from "../../api";
import CardList from "../shared/CardList";
import theme from "../../theme";

const deviceWidth = Dimensions.get("window").width;

const Cards = ({ navigation }) => {
  const [card, setCard] = useState({});

  const getCard = async () => {
    const response = await fetchCards();

    setCard(response);
  };

  useEffect(() => {
    getCard();
  }, []);

  return (
    <View style={styles.back}>
      {card.data ? (
        <CardList card={card} navigation={navigation} />
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
    position: "relative",
  },
});

export default Cards;
