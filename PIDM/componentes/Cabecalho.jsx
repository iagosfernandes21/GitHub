import React, {Component} from "react";
import { render } from "react-dom";
import { StyleSheets, View, Text } from "react-native";


 export default class Cabecalho extends Component{
    render(){
    return(
        <View>
            <Text style={{fontSize:18,fontWeight:'bold', textAlign:'left'}}>
                Nome: {this.props.nome}
                </Text>
            <Text style={{fontSize:18,fontWeight:'bold'}}>
                Curso: {this.props.curso}
            </Text>
        </View>
        
    )
  
}
}

