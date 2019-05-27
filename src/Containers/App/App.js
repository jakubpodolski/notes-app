import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import UserForm from '../../Components/UserForm/UserForm';
import UserPanel from '../../Components/UserPanel/UserPanel';


class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      create: false
    }
  }

  handleStatusClick = () => {
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
                                  handleStatusClick={() => this.handleStatusClick()}/>} />
          <Route path='/user/:username' component={UserPanel}/>
        </Switch>
      </div>
    );
  }
}

export default App
