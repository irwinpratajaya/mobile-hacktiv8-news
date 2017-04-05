/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './src/App'
import rootReducer from './src/reducers/index'

const store = createStore(rootReducer)

export default class hacktiv8news extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('hacktiv8news', () => hacktiv8news);
