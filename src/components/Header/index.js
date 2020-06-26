import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>News App</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
