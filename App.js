import EntryScreen from "./screens/EntryScreen"
import HomeScreen from "./screens/HomeScreen"
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Monitoring from "./screens/Monitoring";
import physique_recognition from "./screens/physique_recognition";
import StepCounter from './screens/StepCounter'


const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HOME">
        <Stack.Screen name="START"
          component={EntryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="LOGIN" component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SIGNUP" component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="HOME" component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="PR" component={physique_recognition}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="SC" component={StepCounter}
          options={{ headerShown: false }}
        /> */}

        {/* <Stack.Screen name="BODY" component={physique_recognition}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;