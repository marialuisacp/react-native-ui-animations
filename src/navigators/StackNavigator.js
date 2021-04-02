import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { routes, initialRoute } from './Routes';

const Stack = createStackNavigator();

export const StackNavigator = () => (
  <Stack.Navigator initialRouteName={initialRoute}>
    {
      routes.map((screen) => (
        <Stack.Screen key={screen.name} {...screen} />
      ))
    }
  </Stack.Navigator>
);