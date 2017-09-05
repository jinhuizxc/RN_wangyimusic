/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * 做网易云的侧滑
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import ViewPagerInAndroid from './app/ViewPagerInAndroid';

export default class RN_wangyimusic extends Component {
  render() {
    return (
        <ViewPagerInAndroid/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RN_wangyimusic', () => RN_wangyimusic);
