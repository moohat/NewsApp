import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {Header} from './components';

const App = () => {
  return (
    <>
      <Header />
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </>
  );
};

export default App;

