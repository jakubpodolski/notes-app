import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import UserLogin from '../../Components/UserLogin/UserLogin';
import CreateUser from '../../Components/CreateUser/CreateUser';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      redirect: false
    }
  }
  
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={UserLogin} />
          <Route exact path='/create' component={CreateUser} />
        </Switch>
      </div>
    );
  }
}

export default App;

// two types of uers -> normal user, admin