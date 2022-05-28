import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Game from './components';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Game />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
