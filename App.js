/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';

import store from './store';
import {themeOrange} from './utils/themes';

import Routes from './routes/Routes';

class App extends React.Component {
  render() {
    return (
      <>
        <StoreProvider store={store}>
          <PaperProvider theme={themeOrange}>
            <Routes />
          </PaperProvider>
        </StoreProvider>
      </>
    );
  }
}

export default App;
