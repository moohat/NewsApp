import React, {Component} from 'react';
import {
  Modal,
  Share,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {WebView} from 'react-native-webview';
import {
  Container,
  Header,
  Content,
  Body,
  Left,
  Icon,
  Right,
  Title,
  Button,
} from 'native-base';

const webViewHeight = Dimensions.get('window').height - 56;

class ModalComponent extends Component {
  constructor(props) {
    super(props);
  }
  handleClose = () => {
    return this.props.onClose();
  };
  handleShare = () => {};

  render() {
    const {showModal, articleData} = this.props;
    const {url} = articleData;
    if (url != undefined) {
      return (
        <Modal
          animationType="slide"
          transparent
          visible={showModal}
          onRequestClose={this.handleClose}>
          <Container style={{margin: 10, backgroundColor: '#fff'}}>
            <Header style={{backgroundColor: '#009387'}}>
              <Left style={{marginRight: -60}}>
                <TouchableOpacity onPress={this.handleClose}>
                  <Icon
                    type="Ionicons"
                    name="close"
                    style={{color: 'white', fontSize: 27}}
                  />
                </TouchableOpacity>
              </Left>
              <Body>
                <Title
                  children={articleData.title}
                  style={{color: 'white'}}
                  numberOfLines={3}
                />
              </Body>
            </Header>
            <WebView
              source={{uri: url}}
              style={styles.webview}
              onError={this.handleClose}
              startInLoadingState
              scalesPageToFit
              showsVerticalScrollIndicator={false}
            />
          </Container>
        </Modal>
      );
    } else {
      return null;
    }
  }
}

export default ModalComponent;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    marginBottom: 0,
    // backgroundColor: 'white',
  },

  header: {
    // backgroundColor: 'white',
  },
  icon: {
    fontSize: 12,
  },
  webview: {
    flex: 1,
  },
});
