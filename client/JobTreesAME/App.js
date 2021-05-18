import React from 'react';
import {View, Text} from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import store from './src/store';
import { Root } from 'native-base'
import Routes from './src/router';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <Root>
        <Routes />
      </Root>
    </Provider>
  )
}

export default App