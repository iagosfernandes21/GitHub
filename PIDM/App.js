import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Aluno from './src/aluno/Aluno';



export default function App() {
  return (
    <View style={styles.container}>
    <Aluno/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily:'verdana',
    backgroundColor: '#5d9b9b',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
