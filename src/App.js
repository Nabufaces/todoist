import React, { Component } from 'react';
import './App.css';
import './css/icon/iconfont.css';
import Leftbar from './componets/Leftbar';

class App extends Component {
  render() {
    return (
      <div className="app">
          <Leftbar/>
      </div>
    );
  }
}

export default App;
