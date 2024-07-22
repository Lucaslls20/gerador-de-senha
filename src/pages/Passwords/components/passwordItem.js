import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PasswordItem({data, removePassword}){

    return(
        <Pressable onLongPressPress={removePassword} style={styles.container}>
            <Text style={styles.text}>{data}</Text>

            </Pressable>
    )
}
const styles = StyleSheet.create({
container:{
    padding:14,
    marginBottom:14,
    width:'100%',
    backgroundColor:'#0e0e0e',
    borderRadius:8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
},
text:{
    color:'#FFF'
}
})