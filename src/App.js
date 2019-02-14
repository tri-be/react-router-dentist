import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home'
import Procedures from './Procedures/Procedures'
import Contact from './Contact/Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home></Home>
        <Procedures />
        <Contact />
      </div>
    );
  }
}

export default App;
