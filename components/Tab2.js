import React, { Component } from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';
export default class Tab2 extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.24h.com.vn/du-bao-thoi-tiet-c568.html'}}
        style={{marginTop: 20}}
      />
    );
  }
}
