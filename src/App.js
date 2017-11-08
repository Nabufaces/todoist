import React, { Component } from 'react';
import 'element-theme-default';
import './App.css';
import './css/icon/iconfont.css';
import Leftbar from './componets/Leftbar';
import Topbar from './componets/Topbar';

class App extends Component {
  render() {
    return (
      <div className="app">
          <Leftbar/>
          <Topbar/>
      </div>
    );
  }
}

export default App;
