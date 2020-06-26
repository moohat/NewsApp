import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {MenuItem} from '../../components';

class MainMenu extends Component {
  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.pages}>
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
      </View>
    );
  }
}

export default MainMenu;
const styles = StyleSheet.create({
  pages: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
