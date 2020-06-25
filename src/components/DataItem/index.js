import React, {Component} from 'react';
import {
  ListItem,
  Left,
  Right,
  Thumbnail,
  Body,
  View,
  Text,
  Button,
} from 'native-base';
import Time from '../Time';
import {StyleSheet} from 'react-native';

class DataItem extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  handlePress = () => {
    const {url, title} = this.data;
    this.props.onPress({url, title});
  };

  render() {
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail
            square
            source={{
              uri: this.data.urlToImage,
            }}
          />
        </Left>
        <Body>
          <Text numberOfLines={2}>{this.data.title}</Text>
          <Text note numberOfLines={2}>
            {this.data.description}
          </Text>
          <View style={styles.wrapText}>
            <Text>{this.data.source.name}</Text>
            <Time time={this.data.publishedAt} />
          </View>
        </Body>
        <Right>
          <Button transparent>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}

export default DataItem;
const styles = StyleSheet.create({
  wrapText: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 4,
  },
});
