import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from '../screens';

const SignupStack = createStackNavigator();

export default function SignupNavigator() {
  return (
    <SignupStack.Navigator
      initialRouteName="SignupScreen"
      headerMode="screen"
      screenOptions={{ headerShown: false }}
    >
      <SignupStack.Screen
        name="SignupScreen"
        component={Screens.SignupScreen}
      />

      <SignupStack.Screen
        name="ProfileSetup"
        component={Screens.ProfileSetup}
      />
    </SignupStack.Navigator>
  );
}
