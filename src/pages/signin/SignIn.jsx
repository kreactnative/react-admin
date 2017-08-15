import React from 'react';
import reactCSS from 'reactcss';

import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

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
      backgroundColor: '#3f51b5',
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
    <Paper elevation={1} style={styles.centerContainer}>
      <Paper elevation={1} style={styles.headerContainer}>
        <Typography type="headline" component="h3" style={styles.headerText}>
          Please Log In
        </Typography>
      </Paper>
      <form>
        <div style={styles.textField}>
          <TextField id="email" label="email" />
        </div>

        <div style={styles.textField}>
          <TextField id="password" label="password" type="password" />
        </div>

        <div style={styles.buttonField}>
          <Button raised color="primary">signin</Button>
        </div>
      </form>
    </Paper>
  </div>
);

export default SignIn;
