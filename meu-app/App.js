import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import LoginVendedor from "./src/screens/LoginVendedor";
import LoginEntregador from "./src/screens/LoginEntregador";

const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Loja Virtual"
          }}
        />

        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: "Detalhes"
          }}
        />

        <Stack.Screen
          name="LoginVendedor"
          component={LoginVendedor}
          options={{
            title: "Login Vendedor"
          }}
        />

        <Stack.Screen
          name="LoginEntregador"
          component={LoginEntregador}
          options={{
            title: "Login Entregador"
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>

  );

}