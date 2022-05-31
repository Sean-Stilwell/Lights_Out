import React, { Component } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Clipboard from "@react-native-clipboard/clipboard";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUndo } from '@fortawesome/free-solid-svg-icons/faUndo';
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons/faShareFromSquare'

export default class WinnerModal extends Component {

    constructor(props){
        super(props);
        this._copy = this._copy.bind(this);
    }

    _copy(){
        let text = "Lights Out!\nMoves: " + this.props.moves + "\nPuzzle: " + this.props.encoded + '\n\nhttps://seanstilwell.ca/Lights_Out/';
        Clipboard.setString(text);
    }

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
                        <Text style={styles.modalText}>You won in {this.props.moves} moves!</Text>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={styles.button} onPress={this.props.onPressRetry}>
                                <View style={{flexDirection: 'row'}}>
                                    <FontAwesomeIcon icon={faUndo} size={20} />
                                    <Text style={styles.buttonText}> Retry</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={this.props.onPressNewGame}>
                                <Text style={styles.buttonText}>New Game</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={styles.button} onPress={this._copy}>
                                <View style={{flexDirection: 'row'}}>
                                    <FontAwesomeIcon icon={faShareFromSquare} size={20} />
                                    <Text style={styles.buttonText}> Share</Text>
                                </View>
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
        margin: 20,
        padding: 10,
        height: 40,
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
    },
    modalContent: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        paddingTop: 15
    }
});