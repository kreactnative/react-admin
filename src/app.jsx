import React from 'react';
import createMuiTheme from 'material-ui/styles/theme';
import { MuiThemeProvider } from 'material-ui/styles';

import Router from './router';

const theme = createMuiTheme();

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router />
  </MuiThemeProvider>
);

export default App;
