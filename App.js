import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './app/store';

import BingoContainer from './app/components/BingoContainer';

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <BingoContainer />
      </Provider>
    )
  }
}
