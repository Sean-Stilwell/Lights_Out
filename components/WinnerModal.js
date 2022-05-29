import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

export default class WinnerModal extends Component {

    render() {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.props.visible}
                onRequestClose={() => {
                    console.log("Modal has been closed.");
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>You won!</Text>
                        <Pressable style={styles.button} onPress={this.props.onPress}>
                            <Text style={styles.buttonText}>Play again?</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        )
    }

}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 20
    },
    modalView: {
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        margin: 20,
        backgroundColor: "#1F1F1F",
        alignItems: "center"
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "#ffA812",
    },
    buttonText: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 30
    }
});