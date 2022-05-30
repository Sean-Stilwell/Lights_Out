import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { CELL_OFF, CELL_ON, CELL_INACTIVE } from './Constants';

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
                </TouchableOpacity>
            case CELL_ON:
                return <TouchableOpacity onPress={this._handlePress.bind(this)}>
                    <Image
                        source={require('../assets/LightOn.png')} 
                        style={styles.image}
                    />
                </TouchableOpacity>
            case CELL_INACTIVE:
                return <Image
                        source={require('../assets/LightInactive.png')} 
                        style={styles.image}
                    />
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