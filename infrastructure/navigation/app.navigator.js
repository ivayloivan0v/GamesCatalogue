import { StyleSheet, StatusBar, Dimensions } from "react-native";

import { LiveCasinoGamesScreen } from "../../screens/LiveCasinoGamesScreen";
import { FeaturedGamesScreen } from "../../screens/FeaturedGamesScreen";
import { SlotsGamesScreen } from "../../screens/SlotsGamesScreen";
import { JackpotsGamesScreen } from "../../screens/JackpotsGamesScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "grey",
        tabBarLabelStyle: { fontSize: deviceWidth < 450 ? 8 : 16 },
      }}
      style={styles.nav}
    >
      <Tab.Screen
        name="FeaturedGames"
        component={FeaturedGamesScreen}
        options={{ tabBarLabel: "Featured Games" }}
      />
      <Tab.Screen
        name="SlotsGames"
        component={SlotsGamesScreen}
        options={{ tabBarLabel: "Slots" }}
      />
      <Tab.Screen
        name="JackpotsGames"
        component={JackpotsGamesScreen}
        options={{ tabBarLabel: "Jackpots" }}
      />
      <Tab.Screen
        name="LiveCasinoGames"
        component={LiveCasinoGamesScreen}
        options={{ tabBarLabel: "Live Casino" }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  nav: {
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 50,
  },
});
