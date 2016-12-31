import React, { Component } from 'react';

import Artboard from './components/Artboard'
import LayerList from './components/LayerList'

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-Panels">
          <LayerList />
        </div>
        <div className="App-Artboard">
          <Artboard />
        </div>
      </div>
    );
  }
}

export default App;
