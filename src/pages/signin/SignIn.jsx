import React from 'react';
import reactCSS from 'reactcss';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = reactCSS({
  default: {
    container: {
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerContainer: {
      padding: '20px',
      backgroundColor: 'rgb(0, 188, 212)',
    },
    centerContainer: {
      display: 'inline-block',
    },
    headerText: {
      margin: 0,
      color: '#fff',
    },
    textField: {
      padding: '0 16px',
    },
    buttonField: {
      padding: '16px',
      textAlign: 'right',
    },
  },
});

const SignIn = () => (
  <div style={styles.container}>
    <Paper zDepth={1} style={styles.centerContainer}>
      <Paper zDepth={1} style={styles.headerContainer}>
        <h3 style={styles.headerText}>Please Log In</h3>
      </Paper>
      <form>
        <div style={styles.textField}>
          <TextField id="email" floatingLabelText="email" />
        </div>

        <div style={styles.textField}>
          <TextField id="password" floatingLabelText="password" type="password" />
        </div>

        <div style={styles.buttonField}>
          <RaisedButton label="signin" primary />
        </div>
      </form>
    </Paper>
  </div>
);

export default SignIn;
