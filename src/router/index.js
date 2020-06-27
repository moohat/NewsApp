import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {TabBusiness, TabGeneral, TabTech, MainMenu} from '../pages';
import Splash from '../pages/Splash';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const Router = () => {
  return (
    // <Tab.Navigator>
    //   <Tab.Screen
    //     name="TabGeneral"
    //     component={TabGeneral}
    //     options={{title: 'GENERAL'}}
    //   />
    //   <Tab.Screen
    //     name="TabBusiness"
    //     component={TabBusiness}
    //     options={{title: 'BUSINESS'}}
    //   />
    //   <Tab.Screen
    //     name="TabTech"
    //     component={TabTech}
    //     options={{title: 'TECHNOLOGY'}}
    //   />
    // </Tab.Navigator>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainMenu"
        component={MainMenu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TabGeneral"
        component={TabGeneral}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TabBusiness"
        component={TabBusiness}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TabTech"
        component={TabTech}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default Router;
