import React from "react";
import { View, StyleSheet } from "react-native";
import { Title, Caption, Drawer, Avatar, Text } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "../../theme";

const DrawerContent = ({ props, navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: "https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png",
                }}
                size={50}
              ></Avatar.Image>
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Caption style={styles.caption}>Welcome,</Caption>
                <Title style={styles.title}>User Name</Title>
              </View>
            </View>
            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                icon={() => (
                  <Entypo
                    name="home"
                    size={24}
                    color={theme.colors.redAccent}
                  />
                )}
                label={() => (
                  <Text style={{ color: theme.colors.redAccent }}>Home</Text>
                )}
                onPress={() => {
                  navigation.navigate("Home");
                }}
              />
              <DrawerItem
                icon={() => (
                  <Fontisto
                    name="persons"
                    size={24}
                    color={theme.colors.redAccent}
                  />
                )}
                label={() => (
                  <Text style={{ color: theme.colors.redAccent }}>Agents</Text>
                )}
                onPress={() => {
                  navigation.navigate("Agents");
                }}
              />
              <DrawerItem
                icon={() => (
                  <MaterialCommunityIcons
                    name="pistol"
                    size={24}
                    color={theme.colors.redAccent}
                  />
                )}
                label={() => (
                  <Text style={{ color: theme.colors.redAccent }}>Weapons</Text>
                )}
                onPress={() => {
                  navigation.navigate("Weapons");
                }}
              />
            </Drawer.Section>
          </View>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={() => (
            <Entypo name="log-out" size={24} color={theme.colors.grayOscuro} />
          )}
          label={() => (
            <Text style={{ color: theme.colors.grayOscuro }}>Sign Out</Text>
          )}
          onPress={() => {
            navigation.navigate("Signin");
          }}
          style={styles.option}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
    color: theme.colors.backgroundWhite,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: theme.colors.backgroundWhite,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
  },
});

export default DrawerContent;
