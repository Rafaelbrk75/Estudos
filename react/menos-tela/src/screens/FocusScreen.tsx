import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AppProvider } from "../store";

function useTimer(initialSeconds:number){
  const [sec, setSec] = React.useState(initialSeconds);
  const [running, setRunning] = React.useState(false);

  React.useEffect(()=>{
    if(!running) return;
    const id = setInterval(()=>{
      setSec(s => {
        if(s<=1){ clearInterval(id); return 0; }
        return s-1;
      });
    }, 1000);
    return ()=>clearInterval(id);
  },[running]);

  const reset = (s:number=initialSeconds)=> setSec(s);
  return {sec, running, setRunning, reset};
}

function fmt(sec:number){
  const m = Math.floor(sec/60);
  const s = sec%60;
  return `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
}

function Inner(){
  const {sec, running, setRunning, reset} = useTimer(25*60);

  return (
    <View style={{flex:1, alignItems:"center", justifyContent:"center", backgroundColor:"#fff", padding:16}}>
      <Text style={{fontSize:24, fontWeight:"bold", marginBottom:8}}>Modo Foco</Text>
      <Text style={{color:"#666", marginBottom:24}}>Sessões curtas para reduzir impulsos de abrir redes.</Text>

      <View style={{width:220, height:220, borderRadius:110, borderWidth:8, borderColor:"#111", alignItems:"center", justifyContent:"center", marginBottom:24}}>
        <Text style={{fontSize:48, fontVariant:["tabular-nums"]}}>{fmt(sec)}</Text>
      </View>

      <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={()=>setRunning(!running)} style={{backgroundColor:"#111", paddingHorizontal:24, paddingVertical:12, borderRadius:12, marginRight:12}}>
          <Text style={{color:"#fff", fontWeight:"600"}}>{running? "Pausar":"Iniciar"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{reset();}} style={{backgroundColor:"#eee", paddingHorizontal:24, paddingVertical:12, borderRadius:12}}>
          <Text style={{color:"#111", fontWeight:"600"}}>Reiniciar</Text>
        </TouchableOpacity>
      </View>

      <View style={{marginTop:24, paddingHorizontal:16}}>
        <Text style={{textAlign:"center", color:"#777"}}>
          Dica: quando atingir 80% da sua meta diária, ative sessões de 5–10 min antes de abrir TikTok/Instagram. 
        </Text>
      </View>
    </View>
  )
}

export default function FocusScreen(){
  return (
    <AppProvider>
      <Inner/>
    </AppProvider>
  )
}
