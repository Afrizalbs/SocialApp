import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {LoginScreen, RegisterScreen, Splashscreen} from '../screen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={Splashscreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
