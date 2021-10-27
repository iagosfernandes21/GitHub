import React from "react";
import {Image} from "react-native";


 export default class Corpo extends React.Component{
    render(){
        
    let figura = {uri:'https://cdn-icons-png.flaticon.com/512/57/57073.png'}
    
        return(
        <Image
            source={figura}
            style={{width:150, height:150}}

        />
        
    )
  
}
}

