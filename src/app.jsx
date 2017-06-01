import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Router from './router';

const App = () => (
  <MuiThemeProvider>
    <Router />
  </MuiThemeProvider>
);

export default App;
