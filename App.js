import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from './src/LoginScreen';
import UserTabs from './src/navigation/UserTabs';
import AdminTabs from './src/navigation/AdminTabs';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Login" component={LoginScreen} />

        {/* User Navigation */}
        <Stack.Screen name="UserTabs" component={UserTabs} />

        {/* Admin Navigation */}
        <Stack.Screen name="AdminTabs" component={AdminTabs} />

        

      </Stack.Navigator>
    </NavigationContainer>
  );
}
