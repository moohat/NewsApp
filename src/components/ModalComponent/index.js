import React, {Component} from 'react';
import {
  Modal,
  Share,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {WebView} from 'react-native-webview';
import {Container, Header, Content, Body, Left, Icon, Title} from 'native-base';

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
          <Container style={styles.container}>
            <Header>
              <Left style={styles.leftIcon}>
                <TouchableOpacity onPress={this.handleClose}>
                  <Icon
                    type="Ionicons"
                    name="close-circle"
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </Left>
              <Body>
                <Title
                  children={articleData.title}
                  style={styles.text}
                  numberOfLines={2}
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
    margin: 10,
    marginBottom: 0,
    backgroundColor: 'white',
  },
  leftIcon: {
    marginRight: -60,
  },
  icon: {
    fontSize: 27,
    color: 'white',
  },
  webview: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});
