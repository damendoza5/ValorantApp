import React from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { Title, Card, Text } from "react-native-paper";
import WeaponImage from "../shared/WeaponImage";
import theme from "../../theme";
import { Ionicons } from "@expo/vector-icons";
import WeaponStat from "../shared/WeaponStat";
import Body from "../shared/BodyDamageImg";
import Credits from "../shared/CreditsImage";

const deviceWidth = Dimensions.get("screen").width;
const deviceHeight = Dimensions.get("screen").height;

const WeaponDetails = ({ route, navigation }) => {
  const { item } = route.params;

  const renderByWeapon = () => {
    if (item.uuid === "2f59173c-4bed-b6c3-2191-dea9b58be9c7") {
      return (
        <View style={styles.container2}>
          <Card style={styles.card}>
            <Card.Content>
              <TouchableOpacity
                style={styles.back}
                onPress={() => navigation.goBack()}
              >
                <Ionicons
                  name="chevron-back"
                  size={24}
                  color={theme.colors.backgroundWhite}
                />
                <Text
                  style={{ color: theme.colors.backgroundWhite, fontSize: 20 }}
                >
                  Back
                </Text>
              </TouchableOpacity>
              <View style={styles.imageC}>
                <WeaponImage uuid={item.uuid} />
              </View>
              <Title style={styles.name}>
                {item.displayName.toUpperCase()}
              </Title>
            </Card.Content>
          </Card>
        </View>
      );
    } else {
      const damages = item.weaponStats.damageRanges;

      return (
        <ScrollView style={styles.container} bounces={false}>
          <Card style={styles.card}>
            <Card.Content>
              <TouchableOpacity
                style={styles.back}
                onPress={() => navigation.goBack()}
              >
                <Ionicons
                  name="chevron-back"
                  size={24}
                  color={theme.colors.backgroundWhite}
                />
                <Text
                  style={{ color: theme.colors.backgroundWhite, fontSize: 20 }}
                >
                  Back
                </Text>
              </TouchableOpacity>
              <View style={styles.imageC}>
                <WeaponImage uuid={item.uuid} />
              </View>
              <Title style={styles.name}>
                {item.displayName.toUpperCase()}
              </Title>
            </Card.Content>
          </Card>
          <Title style={styles.stats}>STATS</Title>
          <WeaponStat stats={item.weaponStats} uuid={item.uuid} />
          <View style={styles.twoContainer}>
            <Title style={styles.stats}>DAMAGE</Title>
            <Title style={styles.costTitle}>COST</Title>
          </View>
          <View style={styles.twoContainer}>
            <View style={styles.damageContainer}>
              <Body />
            </View>
            <View>
              <Text style={styles.damage}>HEAD</Text>
              {damages.map((damage, index) => (
                <Text key={index.toString()} style={styles.damageStat}>
                  {damage.headDamage}
                </Text>
              ))}
              <Text style={styles.damage}>BODY</Text>
              {damages.map((damage, index) => (
                <Text key={index.toString()} style={styles.damageStat}>
                  {damage.bodyDamage}
                </Text>
              ))}
              <Text style={styles.damage}>LEGS</Text>
              {damages.map((damage, index) => (
                <Text key={index.toString()} style={styles.damageStat}>
                  {damage.legDamage}
                </Text>
              ))}
            </View>
            <View style={styles.costContainer}>
              <Credits />
            </View>
            <View style={styles.costData}>
              <Text style={styles.cost}>{item.shopData.cost}</Text>
            </View>
          </View>
        </ScrollView>
      );
    }
  };

  return <ScrollView>{renderByWeapon()}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundGreen,
  },
  container2: {
    flex: 1,
    backgroundColor: theme.colors.backgroundGreen,
    height: deviceHeight * 1,
  },
  card: {
    marginHorizontal: 5,
    marginTop: deviceWidth * -0.11,
    height: deviceHeight * 0.7,
    width: deviceWidth * 1,
    margin: 20,
    backgroundColor: theme.colors.redAccent,
    borderRadius: 50,
  },
  name: {
    position: "relative",
    alignSelf: "center",
    color: theme.colors.backgroundWhite,
    fontSize: 23,
  },
  back: {
    marginTop: "17%",
    position: "relative",
    alignSelf: "flex-start",
    flexDirection: "row",
  },
  stats: {
    marginHorizontal: deviceWidth * 0.07,
    color: theme.colors.backgroundWhite,
  },
  imageC: {
    marginTop: deviceHeight * 0.15,
  },
  twoContainer: {
    flexDirection: "row",
  },
  damageContainer: {
    marginHorizontal: deviceWidth * 0.07,
  },
  damage: {
    fontSize: 12,
    color: theme.colors.redAccent,
  },
  damageStat: {
    fontSize: 8,
    color: theme.colors.backgroundWhite,
  },
  cost: {
    color: theme.colors.backgroundWhite,
  },
  costTitle: {
    marginHorizontal: deviceWidth * 0.2,
    color: theme.colors.backgroundWhite,
  },
  costContainer: {
    marginHorizontal: deviceWidth * 0.18,
  },
  costData: {
    marginHorizontal: deviceWidth * -0.16,
  },
});

export default WeaponDetails;
