import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import React from 'react';
import App from './src/view/AppContainer';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

/*
https://github.com/software-mansion/react-native-gesture-handler/issues/640
 */

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Main);
