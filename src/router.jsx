import React from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import { history } from './store';

import Home from './pages/home/Home';
import SignIn from './pages/signin/SignIn';

const Router = () => (
  <ConnectedRouter history={history}>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/user/auth" component={SignIn} />
    </div>
  </ConnectedRouter>
);

export default Router;
