import React from 'react';

import { DashScreen, LoadingScreen, LandingScreen, LoginScreen, RegisterScreen, VerifyScreen } from '../Screens';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

const Stack = createStackNavigator();

const screens = [
      {
            name: 'Dashboard',
            component: DashScreen
      },
      {
            name: 'Loading',
            component: LoadingScreen
      },
      {
            name: 'Landing',
            component: LandingScreen
      },
      {
            name: 'Login',
            component: LoginScreen
      },
      {
            name: 'Register',
            component: RegisterScreen
      },
      {
            name: 'Verify',
            component: VerifyScreen
      }
]

export const Navigation = () => (
      <Stack.Navigator
            initialRouteName='Landing'
            headerMode='none'
      >
            {
                  screens.map(({ name, component }, index) => (
                        <Stack.Screen 
                              key={index}
                              name={name}
                              component={component}
                              options={{ ...TransitionPresets.SlideFromRightIOS }}
                        />
                  ))
            }     
      </Stack.Navigator>
)
