import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { history } from 'store';
import config from 'config';

import Home from 'pages/home/Home';
import Section from 'pages/section/Section';
import SignIn from 'pages/signin/SignIn';
import Profile from 'pages/profile/Profile';

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
      {/* Header visible to signed-in users */}
      <PrivateRoute path={routePath('/')} component={Header} />
      {/* Left nav visible to signed-in users */}
      <PrivateRoute path={routePath('/')} component={LeftNav} />
      {/* Single route will be chosen from children */}
      <Switch>
        {/* Home page route */}
        <PrivateRoute exact path={routePath('/')} component={Home} />
        {/* Dynamic section routes */}
        {config.sections.map(section => (
          <PrivateRoute exact path={routePath(`/section/${section.id}`)} component={Section} />
        ))}
        {/* User profile page route */}
        <PrivateRoute exact path={routePath('/user/profile')} component={Profile} />
        {/* User signin page route */}
        <PublicOnlyRoute exact path={routePath('/user/auth')} component={SignIn} />
        {/* Redirect route for 404 not found routes */}
        <Route
          render={props => (
            <Redirect
              to={{
                pathname: routePath('/'),
                state: { from: props.location },
              }}
            />
          )}
        />
      </Switch>
    </div>
  </ConnectedRouter>
);

export default Router;
