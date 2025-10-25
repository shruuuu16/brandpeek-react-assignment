// navigation/AppNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import BrandDetailScreen from '../screens/BrandDetailScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Hide default header
        contentStyle: { backgroundColor: 'transparent' },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen} // This line should now work
      />
      <Stack.Screen
        name="BrandDetail"
        component={BrandDetailScreen} 
        options={{
          presentation: 'modal', 
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;