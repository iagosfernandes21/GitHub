import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Cabecalho from'./componentes/Cabecalho';
import Corpo from'./componentes/Corpo';
import Disciplina from './componentes/Disciplina';


export default function App() {
  return (
    <View style={styles.container}>
    <Corpo/>
    <Cabecalho
     nome='Iago Fernandes'
     curso='Design Digital'
     />
    <Disciplina/>
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
