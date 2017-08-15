import React from 'react';
import { Route, Redirect } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import { history } from 'store';
import config from 'config';

import Home from 'pages/home/Home';
import SignIn from 'pages/signin/SignIn';

import Header from 'components/header/Header';
import LeftNav from 'components/left-nav/LeftNav';

const auth = {
  isAuthenticated: true,
};

/** Construct full path using basePath and provided path */
function routePath(path) {
  return `${config.basePath}${path}`;
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
    auth.isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: routePath('/user/auth'),
          state: { from: props.location },
        }}
      />
    )
  )}
  />
);

const PublicOnlyRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
    !auth.isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: routePath('/'),
          state: { from: props.location },
        }}
      />
    )
  )}
  />
);

const Router = () => (
  <ConnectedRouter history={history}>
    <div>
      <PrivateRoute path={routePath('/')} component={Header} />
      <PrivateRoute path={routePath('/')} component={LeftNav} />
      <PrivateRoute exact path={routePath('/')} component={Home} />
      <PublicOnlyRoute exact path={routePath('/user/auth')} component={SignIn} />
    </div>
  </ConnectedRouter>
);

export default Router;
