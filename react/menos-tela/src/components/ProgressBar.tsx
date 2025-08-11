import React from "react";
import { View, Text } from "react-native";

export default function ProgressBar({progress}:{progress:number}){
  const p = Math.max(0, Math.min(1, progress));
  return (
    <View style={{width:"100%", backgroundColor:"#eee", borderRadius:12, height:14}}>
      <View style={{width: `${p*100}%`, backgroundColor:"#4caf50", height:14, borderRadius:12}}/>
    </View>
  )
}
