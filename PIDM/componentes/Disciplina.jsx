import React, {Component} from "react";
import { render } from "react-dom";
import { View, Text } from "react-native";



 class Turmas extends Component{
    render(){
    return(
        <View>
            <Text style={{fontSize:18,fontWeight:'bold'}}>
                Turma: {this.props.disciplina}
                </Text>
        </View>
        
    )
  
}
}

export default class Disciplina extends Component{
    render(){
        return(
            <View>
                <Turmas disciplina='PIMD'/>
                <Turmas disciplina='PIW'/>
                <Turmas disciplina='PI3'/>
            </View>
        )
    }
}