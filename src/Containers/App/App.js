import React, { Component } from 'react';

//import UserLogin from '../../Components/UserLogin/UserLogin';
import Header from '../../Components/Header/Header';

import './App.css';
import UserLogin from '../../Components/UserLogin/UserLogin';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false
    }
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        
        <UserLogin />
        <div style={{height: 2000}}></div>
      </div>
    );
  }
}

export default App;

// two types of uers -> normal user, admin