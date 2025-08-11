import React, { useMemo } from "react";
import { View, Text, ScrollView } from "react-native";
import { AppProvider, useApp } from "../store";
import { normalizeAppName, fmtMinutes } from "../utils/time";

function Inner(){
  const {people} = useApp();

  const totalsByApp = useMemo(()=>{
    const map = new Map<string, number>();
    for(const p of people){
      for(const a of p.apps){
        const key = normalizeAppName(a.app);
        map.set(key, (map.get(key) ?? 0) + a.minutes);
      }
    }
    return Array.from(map.entries()).sort((a,b)=>b[1]-a[1]);
  },[people]);

  const grandTotal = useMemo(()=> totalsByApp.reduce((acc, [,m])=> acc+m, 0), [totalsByApp]);

  return (
    <ScrollView style={{flex:1, backgroundColor:"#fff"}} contentContainerStyle={{padding:16}}>
      <Text style={{fontSize:24, fontWeight:"bold", marginBottom:8}}>Insights</Text>
      <Text style={{color:"#666", marginBottom:16}}>Concentração do tempo por app (grupo inteiro, 7 dias).</Text>

      <View style={{backgroundColor:"#fafafa", borderRadius:16}}>
        {totalsByApp.map(([app, minutes], idx)=>(
          <View key={app} style={{padding:16, borderBottomWidth: idx===totalsByApp.length-1? 0:1, borderBottomColor:"#eee"}}>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
              <Text style={{fontWeight:"600"}}>{idx+1}. {app}</Text>
              <Text>{fmtMinutes(minutes)}</Text>
            </View>
            <View style={{height:8, backgroundColor:"#eee", borderRadius:999, marginTop:8}}>
              <View style={{height:8, width: `${(minutes/grandTotal)*100}%`, backgroundColor:"#3f51b5", borderRadius:999}}/>
            </View>
          </View>
        ))}
      </View>

      <View style={{marginTop:16}}>
        <Text style={{color:"#666"}}>Total geral (todos os apps somados): <Text style={{fontWeight:"600"}}>{fmtMinutes(grandTotal)}</Text></Text>
      </View>
    </ScrollView>
  )
}

export default function InsightsScreen(){
  return (
    <AppProvider>
      <Inner/>
    </AppProvider>
  )
}
