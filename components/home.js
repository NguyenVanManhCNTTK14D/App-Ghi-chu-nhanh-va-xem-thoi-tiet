import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Body, Right, Title } from 'native-base';
import App from '../App';
import Tab2 from './Tab2';
import TabThoiTiet from './TabThoiTiet';
export default class Home extends Component {
  render() {
    return (
      <Container>

        <Header hasTabs>
          <Left />
          <Body>
            <Title style = {{marginLeft:100}}>Go Go</Title>
          </Body>
          <Right />
        </Header>
        <Tabs style={{backgroundColor:'white'}}>
          <Tab heading="Ghi Chú">
            <App />
          </Tab>
          <Tab heading="Thời tiết">
            <Tab2 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}