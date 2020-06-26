import React, {Component} from 'react';
import {
  Alert,
  View,
  ActivityIndicator,
  StyleSheet,
  FlatList,
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
} from 'native-base';
import {DataItem, ModalComponent} from '../../components';
import _ from 'lodash';

import getArticles from '../../service';
export default class TabGeneral extends Component {
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
    getArticles('general').then(
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
    return <DataItem onPress={this.handleItemDataOnPress} data={item} />;
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
            <Icon type="Ionicons" name="search" />
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
});
