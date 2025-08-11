// App.tsx (na raiz)
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AppsScreen from "./src/screens/AppsScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import FocusScreen from "./src/screens/FocusScreen";
import InsightsScreen from "./src/screens/InsightsScreen";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Apps" component={AppsScreen} />
        <Tab.Screen name="Insights" component={InsightsScreen} />
        <Tab.Screen name="Foco" component={FocusScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
