import React from "react";
import { View, Text } from "react-native";

import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./pages/Home";

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    }
});

const Routes = createAppContainer(AppNavigator);

export default Routes;
