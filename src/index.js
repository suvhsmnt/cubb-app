import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import 'assets/scss/material-kit-react.scss?v=1.9.0';

// pages for this product
import Components from 'views/Components/Components.js';
import LandingPage from 'views/LandingPage/LandingPage.js';
import ProfilePage from 'views/ProfilePage/ProfilePage.js';
import LoginPage from 'views/LoginPage/LoginPage.js';
import AdminPage from 'views/AdminPage/AdminPage.js';
import AdminLogin from 'views/AdminPage/AdminLogIn.js';
import SignUpPage from 'views/SignUpPage/SignUpPage.js';

var hist = createBrowserHistory();
const user = true;
ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/sign-up" component={SignUpPage} />
      <Route path="/admin-page" component={AdminPage} />
      <Route path="/admin-login" component={AdminLogin} />
      <Route
        path="/"
        render={(props) => {
          if (user == null) return <Redirect to="/login-page" />;
          return <Components {...props} />;
        }}
      />
    </Switch>
  </Router>,
  document.getElementById('root')
);
