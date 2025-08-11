import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { AppProvider, useApp, getPerson } from "../store";
import { fmtMinutes, normalizeAppName } from "../utils/time";

function Inner(){
  const state = useApp();
  const person = getPerson(state);

  return (
    <ScrollView style={{flex:1, backgroundColor:"#fff"}} contentContainerStyle={{padding:16}}>
      <Text style={{fontSize:24, fontWeight:"bold", marginBottom:8}}>Apps</Text>
      <Text style={{color:"#666", marginBottom:16}}>Selecione a pessoa e veja os tempos coletados.</Text>

      <View style={{flexDirection:"row", flexWrap:"wrap", marginBottom:16}}>
        {state.people.map(p => (
          <TouchableOpacity key={p.id} onPress={()=>state.setSelectedId(p.id)} style={{paddingVertical:8, paddingHorizontal:12, marginRight:8, marginBottom:8, borderWidth:1, borderColor: state.selectedId===p.id? "#111":"#ddd", borderRadius:999, backgroundColor: state.selectedId===p.id? "#111":"#fff"}}>
            <Text style={{color: state.selectedId===p.id? "#fff":"#111"}}>{p.id}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{backgroundColor:"#fafafa", borderRadius:16}}>
        {person.apps.map((a, idx)=>(
          <View key={idx} style={{flexDirection:"row", justifyContent:"space-between", paddingHorizontal:16, paddingVertical:12, borderBottomWidth: idx===person.apps.length-1? 0: 1, borderBottomColor:"#eee"}}>
            <Text>{normalizeAppName(a.app)}</Text>
            <Text>{fmtMinutes(a.minutes)}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

export default function AppsScreen(){
  return (
    <AppProvider>
      <Inner/>
    </AppProvider>
  )
}
