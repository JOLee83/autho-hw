import React, { Component } from 'react';

import { Router, Route, Switch } from 'react-router-dom'

import Home from './Pages/Home';
import Callback from './Pages/Callback';

import Auth from './Auth/auth';
import history from './History';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends Component {
  render() {
    return (
      <Router history={history} component={App}>
        <Switch>
          <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
          <Route exact path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}
          />
        </Switch>
      </Router>
    )
  }
}

export default App;