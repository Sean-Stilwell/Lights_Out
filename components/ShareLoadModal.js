import React, { Component } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";
import Clipboard from "@react-native-clipboard/clipboard";

import { codeIsValid } from "../scripts/board_coding";

export default class ShareLoadModal extends Component {

    constructor(props){
        super(props);
        this._copy = this._copy.bind(this);
        this._validateCode = this._validateCode.bind(this);
    }

    _copy(){
        Clipboard.setString(this.props.encoded);
    }

    _validateCode(){
        if(codeIsValid(this.state.text)){
            this.props.loader(this.state.text)
        }
        else {
            alert("The code you entered is invalid. Please try again.");
        }
    }
    
    state = {
        text: '4444444444',
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
                        <Text style={styles.modalText}>Load a Game</Text>
                        <Text style={styles.modalContent}>If you have a code, enter it to load a game: </Text>
                        <View style={{flexDirection: 'row'}}>
                            <TextInput 
                                style={styles.textInput}
                                label="Code"
                                value={this.state.text}
                                multiline={false}
                                onChangeText={text => this.setState({ text: text })}
                                keyboardType="numeric"
                                maxLength={10}
                            />
                            <TouchableOpacity style={styles.button} onPress={() => this._validateCode()}>
                                <Text style={styles.buttonText}>Load</Text>
                            </TouchableOpacity>
                        </View>
                        
                        <Text style={styles.modalText}>Share Your Game</Text>
                        <Text style={styles.modalContent}>To share your current game, copy this code: </Text>
                        <View style={{flexDirection: 'row'}}>
                            <TextInput 
                                style={styles.textInput}
                                label="Code"
                                value={this.props.encoded}
                                multiline={false}
                                editable={false}
                                keyboardType="numeric"
                                maxLength={10}
                            />
                            <TouchableOpacity style={styles.button} onPress={this._copy}>
                                <Text style={styles.buttonText}>Copy</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.buttonLarge} onPress={this.props.onPress}>
                            <Text style={styles.buttonText}>Close</Text>
                        </TouchableOpacity>
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
        height: 40,
        backgroundColor: "#ffA812",
    },
    buttonLarge: {
        margin: 20,
        padding: 10,
        height: 40,
        width: 120,
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
        fontSize: 30,
        paddingTop: 15
    },
    modalContent: {
        color: "white",
        textAlign: "center",
        fontSize: 20
    },
    textInput: {
        margin: 20,
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#1F1F1F',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});