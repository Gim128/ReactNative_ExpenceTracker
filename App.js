import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screen/Home';
import LoginScreen from './screen/LoginScreen';
import SignUpScreen from './screen/SignUpScreen';
import ViewScreen from './screen/ViewScreen';


const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (

      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen
            name="ViewScreen"
            component={ViewScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
