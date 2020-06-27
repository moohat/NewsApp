import React, {Component} from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import {MenuItem, Header} from '../../components';
import { BgNews } from '../../assets';

class MainMenu extends Component {
  render() {
    const {navigation} = this.props;

    return (
      <>
        <Header />
        <ImageBackground source={BgNews} style={styles.pages}>
          <View>
            <MenuItem
              title="General"
              onPress={() => navigation.navigate('TabGeneral')}
            />
            <MenuItem
              title="Business"
              onPress={() => navigation.navigate('TabBusiness')}
            />
            <MenuItem
              title="Technology"
              onPress={() => navigation.navigate('TabTech')}
            />
          </View>
        </ImageBackground>
      </>
    );
  }
}

export default MainMenu;
const styles = StyleSheet.create({
  pages: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
});
