import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { AppUsage, DEFAULT_WEEKLY_GOAL_MIN, PEOPLE, Person } from "./sampleData";
import { isSocial, normalizeAppName } from "./utils/time";

type State = {
  people: Person[];
  selectedId: string;
  weeklyGoalMin: number; // meta semanal para apps sociais
  setSelectedId: (id: string) => void;
  setWeeklyGoalMin: (m: number) => void;
};

const KEY = {
  SELECTED: "menostela.selectedId",
  WEEKLY_GOAL: "menostela.weeklyGoalMin",
};

const AppCtx = createContext<State | null>(null);

export function AppProvider({children}:{children:ReactNode}){
  const [selectedId, setSelectedIdState] = useState<string>(PEOPLE[0].id);
  const [weeklyGoalMin, setWeeklyGoalMinState] = useState<number>(DEFAULT_WEEKLY_GOAL_MIN);

  useEffect(()=>{
    (async ()=>{
      const s = await AsyncStorage.getItem(KEY.SELECTED);
      const g = await AsyncStorage.getItem(KEY.WEEKLY_GOAL);
      if (s) setSelectedIdState(s);
      if (g) setWeeklyGoalMinState(parseInt(g,10));
    })();
  },[]);

  const setSelectedId = async (id:string) => {
    setSelectedIdState(id);
    await AsyncStorage.setItem(KEY.SELECTED, id);
  };
  const setWeeklyGoalMin = async (m:number) => {
    setWeeklyGoalMinState(m);
    await AsyncStorage.setItem(KEY.WEEKLY_GOAL, String(m));
  };

  const value: State = useMemo(()=>({people: PEOPLE, selectedId, weeklyGoalMin, setSelectedId, setWeeklyGoalMin}),[selectedId, weeklyGoalMin]);

  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>
}

export function useApp(){
  const ctx = useContext(AppCtx);
  if(!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}

// helpers to compute metrics
export function getPerson(state: State): Person {
  return state.people.find(p=>p.id===state.selectedId) ?? state.people[0];
}

export function socialUsageOf(person: Person){
  return person.apps.filter(a => isSocial(normalizeAppName(a.app)));
}

export function totalMinutes(apps: AppUsage[]){
  return apps.reduce((acc, a) => acc + a.minutes, 0);
}
