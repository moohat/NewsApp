import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconNews} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainMenu');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.page}>
      <IconNews width="20%" height="20%" />
      <Text style={styles.title}>News App</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2d98da',
    marginTop: 20,
  },
});
