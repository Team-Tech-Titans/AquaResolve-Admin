import { StyleSheet, Text, View } from 'react-native';
import React,{ useState, useEffect } from 'react';
import HomePage from './screens/HomePage';
import History from './screens/HistoryPage';
import Account from './screens/AccountPage';
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import {useFonts} from "expo-font";
import poppinsRegular from "./assets/fonts/Poppins-Regular.ttf";
import poppinsSemiBold from "./assets/fonts/Poppins-SemiBold.ttf";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': poppinsRegular,
    'Poppins-SemiBold': poppinsSemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
              <Stack.Screen
                  name="Home"
                  component={HomePage}
                  options={{ headerShown: false }}
              />
              <Stack.Screen
                  name="History"
                  component={History}
                  options={{ headerShown: false, animationEnabled: false }}
              />
              <Stack.Screen
                  name="Account"
                  component={Account}
                  options={{ headerShown: false, animationEnabled: false }}
              />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Signup"
                component={SignUp}
                options={{headerShown: false}}
            />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins-Regular',
  },
});