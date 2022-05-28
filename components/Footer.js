import React, {Component} from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';

export default function Footer(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Developed by <Text 
                    onPress={() => Linking.openURL('https://www.seanstilwell.ca')}
                    style={styles.link}>Sean Stilwell
                    </Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    },
    text: {
        fontSize: 20,
        color: 'white',
    },
    link: {
        color: '#ffA812',
    }
});