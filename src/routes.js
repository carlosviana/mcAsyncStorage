import React from "react";
import { View, Text } from "react-native";

import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./pages/Home";
import TodoScreen from "./pages/Todo";

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Todo: {
        screen: TodoScreen
    }
});

const Routes = createAppContainer(AppNavigator);

export default Routes;
