//import libraries
import React, {Component} from 'react';
import {Text} from 'native-base';
import moment from 'moment';
import {StyleSheet} from 'react-native';

// create a component
class Time extends Component {
  constructor(props) {
    super(props);
    this.date = props.time;
  }

  render() {
    const time = moment(this.date || moment.now()).fromNow();
    return (
      <Text note style={styles.text}>
        {time}
      </Text>
    );
  }
}

//make this component available to the app
export default Time;

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 10,
  },
});
