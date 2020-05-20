import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from '../screens';
import BottomNavigator from './BottomNavigator';

const HomeStack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator
      initialRouteName="HomeScreen"
      headerMode="screen"
      mode="modal"
      screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen name="HomeScreen" component={BottomNavigator} />

      <HomeStack.Screen name="DetailScreen" component={Screens.DetailScreen} />
    </HomeStack.Navigator>
  );
}
