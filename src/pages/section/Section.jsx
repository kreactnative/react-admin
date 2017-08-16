import React from 'react';

import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const Section = () => (
  <section style={{ paddingTop: '80px', marginLeft: '300px', marginRight: '50px' }} >
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Paper style={{ padding: '16px' }}>
          <Typography type="title">Section</Typography>
        </Paper>
      </Grid>
    </Grid>
  </section>
);

export default Section;
