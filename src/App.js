import React, { Component } from 'react';
import 'element-theme-default';
import './App.css';
import './css/icon/iconfont.css';
import Leftbar from './componets/Leftbar';
import Topbar from './componets/Topbar';
import Main from './componets/Main'

class App extends Component {
  render() {
    return (
      <div className="app">
          <Leftbar/>
          <Topbar/>
          <Main/>
      </div>
    );
  }
}

export default App;
