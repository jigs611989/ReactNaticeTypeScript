import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../container/HomeScreen';
import WelcomeScreen from '../container/WelcomeScreen';
import ButtonOptionScreen from '../container/ButtonOptionScreen';
import Screens from '../constant/Screens';

const Stack = createStackNavigator();

function OnboardingStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={Screens.WelcomeScreen} component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Screens.HomeScreen} component={HomeScreen} />
      <Stack.Screen
        name={Screens.ButtonOptionScreen}
        component={ButtonOptionScreen}
      />
    </Stack.Navigator>
  );
}

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen
          name={Screens.OnboardingStack}
          component={OnboardingStack}
        />
        <Stack.Screen name={Screens.AppStack} component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
