import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Home from "./pages/Home";
import Join from "./pages/Join";
import Create from "./pages/Create";
import Game from "./pages/Game";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Create" component={Create} />
        <AppStack.Screen name="Join" component={Join} />
        <AppStack.Screen name="Game" component={Game} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
