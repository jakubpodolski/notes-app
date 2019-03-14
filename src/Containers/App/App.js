import React, { Component } from 'react';

import UserLogin from '../../Components/UserLogin/UserLogin';
import CreatUser from '../../Components/CreateUser/CreateUser';

import './App.css';

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
        <UserLogin />
        <CreatUser />
      </div>
    );
  }
}

export default App;

// two types of uers -> normal user, admin