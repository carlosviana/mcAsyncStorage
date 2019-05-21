import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

//import { Button, ListItem, Icon } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

class Home extends Component {
    static navigationOptions = {
        header: null
    };
    state = {
        todos: [
            {
                id: "1",
                titulo: "Arrumar a mala",
                iconTipo: "suitcase-rolling",
                inativo: true
            },
            {
                id: "2",
                titulo: "Deixar comida para o cachorro",
                iconTipo: "dog",
                inativo: false
            }
        ]
    };

    onPress = () => {
        alert("Clicado");
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Home Screen</Text>
                <TouchableOpacity
                    style={styles.button}
                    title="Task"
                    onPress={this.onPress}
                >
                    <Text>Task</Text>
                </TouchableOpacity>
                <View style={styles.listItem}>
                    {this.state.todos.map((item, i) => (
                        <View style={styles.itemInList} key={i}>
                            <Text>{item.titulo}</Text>
                        </View>
                    ))}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    listItem: {
        flex: 1
    },
    itemInList: {},
    button: {
        borderRadius: 10,
        height: 50,
        margin: 10,
        backgroundColor: "#a23333"
    }
});

export default Home;
