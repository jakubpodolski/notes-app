import React, { Component } from 'react';
import UserLogin from '../../Components/UserLogin/UserLogin';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',

    }
  }

  createUser = (event) => {
    event.preventDefault();
    console.log('tu bedze php')
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value 
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <UserLogin 
            createUser={(event) => this.createUser(event)} 
            handleChange={(event) => this.handleChange(event)} 
            username={this.username}
            password={this.password}
          />
        </header>
      </div>
    );
  }
}

export default App;