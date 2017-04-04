/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';

import App from './src/App'

export default class hacktiv8news extends React.Component {
  render() {
    return (
      <App />
    );
  }
}


AppRegistry.registerComponent('hacktiv8news', () => hacktiv8news);
