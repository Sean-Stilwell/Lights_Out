import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Lights Out!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 30,
    },
    text: {
        fontSize: 60,
        fontWeight: 'bold',
        color: 'white',
    }
});