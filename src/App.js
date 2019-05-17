import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Inital from './Initial';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Inital />
      </Provider>
    );
  }
}

export default App;
