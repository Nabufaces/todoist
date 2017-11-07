import React, { Component } from 'react';
import { Button } from 'element-react';
import 'element-theme-default';
import './App.css';
import Topbar from './componets/Topbar';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Topbar/>
      </div>
    );
  }
}

export default App;
