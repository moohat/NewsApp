import React, {Component} from 'react';
import {Alert, View, ActivityIndicator, StyleSheet} from 'react-native';

import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';
import {DataItem, ModalComponent} from '../../components';

import getArticles from '../../service';
export default class TabBusiness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticleData: {},
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
    getArticles('business').then(
      data => {
        this.setState({
          isLoading: false,
          data: data,
        });
      },
      error => {
        Alert.alert('Error', 'Something went wrong!');
      },
    );
  }
  render() {
    const view = this.state.isLoading ? (
      <View style={styles.wrapLoading}>
        <ActivityIndicator animating={this.state.isLoading} />
        <Text>Please Wait...</Text>
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        renderRow={item => {
          return <DataItem onPress={this.handleItemDataOnPress} data={item} />;
        }}
      />
    );
    return (
      <Container>
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
});
