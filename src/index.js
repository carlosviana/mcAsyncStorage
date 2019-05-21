import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import "./config/reactotron";

import Routes from "./routes";

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Routes />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
