import React, { useMemo } from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { AppProvider, useApp, getPerson, socialUsageOf, totalMinutes } from "../store";
import ProgressBar from "../components/ProgressBar";
import { fmtMinutes } from "../utils/time";

function Inner(){
  const state = useApp();
  const person = getPerson(state);
  const social = useMemo(()=>socialUsageOf(person),[person]);
  const used = useMemo(()=>totalMinutes(social),[social]);

  const progress = used / state.weeklyGoalMin;
  const top3 = [...social].sort((a,b)=>b.minutes-a.minutes).slice(0,3);

  return (
    <ScrollView style={{flex:1, backgroundColor:"#fff"}} contentContainerStyle={{padding:16}}>
      <Text style={{fontSize:24, fontWeight:"bold", marginBottom:8}}>Dashboard</Text>
      <Text style={{color:"#666", marginBottom:16}}>Usuário ativo: <Text style={{fontWeight:"600"}}>{person.label}</Text></Text>

      <View style={{backgroundColor:"#fafafa", borderRadius:16, padding:16, marginBottom:16}}>
        <Text style={{fontSize:18, fontWeight:"600", marginBottom:6}}>Progresso semanal (redes sociais)</Text>
        <Text style={{marginBottom:8}}>{fmtMinutes(used)} usados • Meta {fmtMinutes(state.weeklyGoalMin)}</Text>
        <ProgressBar progress={progress}/>
        <Text style={{marginTop:6, color: progress>=0.8 ? "#d32f2f" : "#777"}}>
          {progress>=1 ? "Meta estourada. Bora ajustar!" : progress>=0.8 ? "Chegando no limite — segura essa rolagem infinita!" : "De boa por enquanto."}
        </Text>
      </View>

      <View style={{backgroundColor:"#fafafa", borderRadius:16, padding:16, marginBottom:16}}>
        <Text style={{fontSize:18, fontWeight:"600", marginBottom:6}}>Top ladrões de atenção</Text>
        {top3.map((a, i)=>(
          <View key={i} style={{flexDirection:"row", justifyContent:"space-between", paddingVertical:6}}>
            <Text>{i+1}. {a.app}</Text>
            <Text>{fmtMinutes(a.minutes)}</Text>
          </View>
        ))}
      </View>

      <View style={{backgroundColor:"#fafafa", borderRadius:16, padding:16, marginBottom:28}}>
        <Text style={{fontSize:18, fontWeight:"600", marginBottom:6}}>Meta semanal</Text>
        <Text style={{color:"#666", marginBottom:8}}>Defina uma meta realista (minutos/semana para redes sociais).</Text>
        <GoalEditor/>
      </View>
    </ScrollView>
  )
}

function GoalEditor(){
  const {weeklyGoalMin, setWeeklyGoalMin} = useApp();
  const [value, setValue] = React.useState(String(weeklyGoalMin));

  return (
    <View style={{flexDirection:"row", alignItems:"center"}}>
      <TextInput
        value={value}
        onChangeText={setValue}
        keyboardType="numeric"
        style={{flex:1, borderWidth:1, borderColor:"#ddd", borderRadius:10, padding:12, marginRight:10}}
        placeholder="Ex.: 840 (min/semana)"
      />
      <TouchableOpacity
        onPress={()=>{
          const n = parseInt(value,10);
          if(!isNaN(n) && n>0) setWeeklyGoalMin(n);
        }}
        style={{backgroundColor:"#111", paddingHorizontal:16, paddingVertical:12, borderRadius:10}}
      >
        <Text style={{color:"#fff", fontWeight:"600"}}>Salvar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default function DashboardScreen(){
  return (
    <AppProvider>
      <Inner/>
    </AppProvider>
  )
}
