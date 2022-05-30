import React, { Component } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View, Linking } from "react-native";

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
                        <Text style={styles.modalText}>How to play</Text>
                        <Text style={styles.modalContent}>Try to turn all the cells on the board "Off".</Text>
                        <Text style={styles.modalContent}>Whenever you click a cell, the cells beside it will also swap between "On" and "Off".</Text>
                        <Text style={styles.modalContent}>The game is over when all the cells are "Off".</Text>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://github.com/Sean-Stilwell/Lights_Out/issues')}>
                                <Text style={styles.buttonText}>Report Issue</Text>
                            </TouchableOpacity> 
                            <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
                                <Text style={styles.buttonText}>Close</Text>
                            </TouchableOpacity>
                        </View>
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
        padding: 20,
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
        margin: 20,
        padding: 10,
        backgroundColor: "#ffA812",
    },
    buttonText: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 30
    },
    modalContent: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        paddingTop: 15
    }
});