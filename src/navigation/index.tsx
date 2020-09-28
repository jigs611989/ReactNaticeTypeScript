import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Color } from '../asset';
import { Screens } from '../constant/AppConstant';
import { ButtonOptionScreen, HomeScreen, WelcomeScreen } from '../container';

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
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Color.primary,
        },
        headerTintColor: Color.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name={Screens.HomeScreen}
        component={HomeScreen}
        options={{ title: 'Home Screen' }}
      />
      <Stack.Screen
        name={Screens.ButtonOptionScreen}
        component={ButtonOptionScreen}
        options={{ title: 'Button Option' }}
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
