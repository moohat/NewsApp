import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TabBusiness, TabGeneral, TabTech} from '../screens';

const Tab = createMaterialTopTabNavigator();

const Router = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TabGeneral"
        component={TabGeneral}
        options={{title: 'GENERAL'}}
      />
      <Tab.Screen
        name="TabBusiness"
        component={TabBusiness}
        options={{title: 'BUSINESS'}}
      />
      <Tab.Screen
        name="TabTech"
        component={TabTech}
        options={{title: 'TECHNOLOGY'}}
      />
    </Tab.Navigator>
  );
};
export default Router;
