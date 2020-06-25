import React, {Component} from 'react';
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
export default class ListThumbnailExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={{
                    uri:
                      'https://img1.rapidleaks.com/2018/09/Most-Beautiful-Girls-on-the-Earth-1280x720.jpg',
                  }}
                />
              </Left>
              <Body>
                <Text>News Title</Text>
                <Text note numberOfLines={2}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
