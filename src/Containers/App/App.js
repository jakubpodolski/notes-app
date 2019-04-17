import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import UserForm from '../../Components/UserForm/UserForm';

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      create: false
    }
  }

  handleCreateClick = () => {
    this.setState({ create: !this.state.create })
  }
  
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
              exact path='/'
              render={props => <UserForm {...props}
                                  create={this.state.create}
                                  handleCreateClick={() => this.handleCreateClick()}/>} />
        </Switch>
      </div>
    );
  }
}

export default App
