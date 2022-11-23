import { StyleSheet, StatusBar, Platform } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { CardGamesScreen } from "./screens/CardGamesScreen";
import { FeaturedGamesScreen } from "./screens/FeaturedGamesScreen";
import { SlotsGamesScreen } from "./screens/SlotsGamesScreen";
import { TableGamesScreen } from "./screens/TableGamesScreen";

import { ApiContextProvider } from "./context/ApiContext";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <ApiContextProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "grey",
            tabBarLabelStyle: { fontSize: 8 },
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
            options={{ tabBarLabel: "Slots Games" }}
          />
          <Tab.Screen
            name="TableGames"
            component={TableGamesScreen}
            options={{ tabBarLabel: "Table Games" }}
          />
          <Tab.Screen
            name="CardGames"
            component={CardGamesScreen}
            options={{ tabBarLabel: "Card Games" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ApiContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  nav: {
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 50,
  },
});
