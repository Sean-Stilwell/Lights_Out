import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { CELL_OFF, CELL_ON } from './Constants';

export default class Cell extends Component {
    constructor(props){
        super(props);
    }

    _renderCell(){
        switch(this.props.value){
            case CELL_OFF:
                return <TouchableOpacity onPress={this._handlePress.bind(this)}>
                    <Image 
                        source={require('../assets/LightOff.png')}
                        style={styles.image}
                    />
                    {/* <Text>{this.props.index}</Text> */}
                </TouchableOpacity>
            case CELL_ON:
                return <TouchableOpacity onPress={this._handlePress.bind(this)}>
                    <Image
                        source={require('../assets/LightOn.png')} 
                        style={styles.image}
                    />
                    {/* <Text>{this.props.index}</Text> */}
                </TouchableOpacity>
        }
    }

    _handlePress(){ 
        this.props.onPress(this.props.index);
    }

    render() {
        return (
            <View style={styles.container}>
                {this._renderCell()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 75,
        height: 75,
        margin: 2,
    }
});