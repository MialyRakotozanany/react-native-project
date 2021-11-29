import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../views/Home';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import Profile from '../views/Profile';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default Navigation;
