import React from "react";
import { Text, View } from "react-native";

export default function Chip({label}:{label:string}){
  return (
    <View style={{paddingVertical:4, paddingHorizontal:10, borderRadius:999, backgroundColor:"#f2f2f2", marginRight:8, marginBottom:8}}>
      <Text style={{fontSize:12}}>{label}</Text>
    </View>
  )
}
