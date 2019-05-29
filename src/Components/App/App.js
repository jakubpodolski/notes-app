import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import UserForm from '../UserForm/UserForm';
import UserPanel from '../UserPanel/UserPanel'

const App = () => {
  const [create, setCreate] = useState(false)

  const handleStatusClick = () => {
    setCreate(!create)
  }
  return (
    <div className="App">
      <Switch>
        <Route
            exact path='/'
            render={props => <UserForm
                                create={create}
                                handleStatusClick={handleStatusClick}/>} />
        <Route path='/user/:username' component={UserPanel}/>
      </Switch>
    </div>
  );
}

export default App
