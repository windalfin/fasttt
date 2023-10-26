import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../screens/HomePage/HomePage';
import AuthScreen from '../screens/Auth/Auth'; // Import your AuthScreen

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  );
};

export default MainNavigator;