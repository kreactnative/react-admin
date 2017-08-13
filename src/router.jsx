import React from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import { history } from 'store';
import config from 'config';

import Home from './pages/home/Home';
import SignIn from './pages/signin/SignIn';

/** Construct full path using basePath and provided path */
function routePath(path) {
  return `${config.basePath}${path}`;
}

const Router = () => (
  <ConnectedRouter history={history}>
    <div>
      <Route exact path={routePath('/')} component={Home} />
      <Route path={routePath('/user/auth')} component={SignIn} />
    </div>
  </ConnectedRouter>
);

export default Router;
