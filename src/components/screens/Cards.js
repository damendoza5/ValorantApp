import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { fetchCards } from "../../api";
import CardList from "../shared/CardList";
import theme from "../../theme";

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
      <CardList card={card} navigation={navigation} />
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

export default Cards;
