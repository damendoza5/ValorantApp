import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { ProgressBar, Text } from "react-native-paper";
import theme from "../../theme";

const deviceWidth = Dimensions.get("window").width;

const WeaponStat = ({ stats, uuid }) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.statContainer}>
          <Text style={styles.statName}>FIRE RATE:</Text>
          <Text style={styles.statValue}>{stats.fireRate}</Text>
        </View>
        <ProgressBar
          style={styles.statBar}
          progress={stats.fireRate / 15}
          color={theme.colors.redAccent}
        />
      </View>
      <View>
        <View style={styles.statContainer}>
          <Text style={styles.statName}>MAGAZINE SIZE:</Text>
          <Text style={styles.statValue}>{stats.magazineSize}</Text>
        </View>
        <ProgressBar
          style={styles.statBar}
          progress={stats.magazineSize / 100}
          color={theme.colors.redAccent}
        />
      </View>
      <View>
        <View style={styles.statContainer}>
          <Text style={styles.statName}>RELOAD TIME:</Text>
          <Text style={styles.statValue}>{stats.reloadTimeSeconds}</Text>
        </View>
        <ProgressBar
          style={styles.statBar}
          progress={stats.reloadTimeSeconds / 10}
          color={theme.colors.redAccent}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: deviceWidth * 0.05,
  },
  statContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginHorizontal: 10,
  },
  statName: {
    width: "50%",
    color: theme.colors.backgroundWhite,
    paddingBottom: 5,
    fontSize: 12,
  },
  statValue: {
    width: "50%",
    textAlign: "right",
    color: theme.colors.backgroundWhite,
    fontSize: 12,
  },
  statBar: {
    marginHorizontal: 10,
    height: 15,
    marginBottom: 5,
  },
});

export default WeaponStat;
