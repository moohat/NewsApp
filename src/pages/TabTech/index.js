import React, {Component} from 'react';
import {
  Alert,
  View,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {
  Container,
  Content,
  List,
  Text,
  Header,
  Item,
  Icon,
  Input,
  ListItem,
  Left,
  Body,
  Thumbnail,
  Right,
} from 'native-base';
import {DataItem, ModalComponent, Time} from '../../components';
import _ from 'lodash';

import getArticles from '../../service';
export default class TabTech extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
      dataBackup: [],
      setModalVisible: false,
      modalArticleData: {},
      query: '',
    };
  }

  handleItemDataOnPress = articleData => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData,
    });
  };
  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {},
    });
  };

  componentDidMount() {
    getArticles('technology').then(
      data => {
        this.setState({
          isLoading: false,
          data: data,
          dataBackup: data,
        });
      },
      error => {
        Alert.alert('Error', 'Something went wrong!');
      },
    );
  }

  _renderItem = ({item, index}) => {
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail
            square
            source={{
              uri: item.urlToImage,
            }}
          />
        </Left>
        <Body>
          <Text numberOfLines={2}>{item.title}</Text>
          <Text note numberOfLines={2}>
            {item.description}
          </Text>
          <View style={styles.wrapText}>
            <Text>{item.source.name}</Text>
            <Time time={item.publishedAt} />
          </View>
        </Body>

        <DataItem onPress={this.handleItemDataOnPress} data={item} />
      </ListItem>
    );
  };

  handleSearch = text => {
    const formattedQuery = text.toLowerCase();
    const data = _.filter(this.state.dataBackup, item => {
      if (item.title.toLowerCase().includes(formattedQuery)) {
        return true;
      }
      return false;
    });
    this.setState({
      data,
      query: text,
    });
  };

  render() {
    const view = this.state.isLoading ? (
      <View style={styles.wrapLoading}>
        <ActivityIndicator animating={this.state.isLoading} />
        <Text>Please Wait...</Text>
      </View>
    ) : (
      <List>
        <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </List>
    );
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="search" />
            <Input placeholder="Search" onChangeText={this.handleSearch} />
          </Item>
        </Header>

        <Content>{view}</Content>
        <ModalComponent
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  wrapLoading: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: 10,
  },
  wrapText: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 4,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  btnView: {
    backgroundColor: 'blue',
    width: 50,
    height: 20,
    borderRadius: 10,
  },
});
