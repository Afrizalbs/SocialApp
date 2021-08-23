import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {LoginScreen, RegisterScreen, Splashscreen} from '../screen';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="LoginScreen">
      <Stack.Screen name="SplashScreen" component={Splashscreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default Router;
