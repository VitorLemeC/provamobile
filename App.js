import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Pedidos from './screens/Pedidos';
import Detalhes from './screens/Detalhes';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Pedidos" component={Pedidos} options={{headerShown: false}}/>
        <Stack.Screen name="Detalhes" component={Detalhes} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
