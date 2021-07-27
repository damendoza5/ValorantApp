import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Title } from "react-native-paper";
import MapCard from "./MapCard";
import theme from "../../theme";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const MapList = ({ map }) => {
  const emptyFlatlist = (
    <View style={styles.foundContainer}>
      <Title style={styles.title}>Map data not found</Title>
    </View>
  );

  return (
    <View>
      <FlatList
        style={styles.container}
        data={map.data}
        keyExtractor={(item) => item.uuid.toString()}
        horizontal
        showsHorizontalScrollIndicator={true}
        ListEmptyComponent={emptyFlatlist}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity key={item.uuid}>
              <MapCard
                name={item.displayName}
                uuid={item.uuid}
                coordinates={item.coordinates}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom: deviceHeight * 0,
    marginTop: deviceHeight * 0.05,
    paddingLeft: deviceWidth * 0.05,
  },
  foundContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    color: theme.colors.backgroundWhite,
  },
});

export default MapList;
