import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminPage from './pages/admin';
import AuthorizeRoute from './helpers/AuthorizeRoute';
import NoMatchPage from './pages/misc/NoMatchPage';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/admin"
          component={AuthorizeRoute(['admin', 'user'])(AdminPage)}
        />
        {/* <Route
          path="/"
          component={AdminPage}
        /> */}
        <Route component={NoMatchPage} />
      </Switch>
    );
  }
}

export default App;
