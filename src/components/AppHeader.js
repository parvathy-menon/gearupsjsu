import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';

import LoginButton from './LoginButton';

const styles = {
  flex: {
    flex: 1,
  },
};

const AppHeader = ({ classes }) => (
  <AppBar position="static" color="secondary">
    <Toolbar>
      <Button color="inherit" component={Link} to="/loginhome">Home</Button>
      <Button color="inherit" component={Link} to="/addclass">Add Class</Button>
      <Button color="inherit" component={Link} to="/dropclass">Drop Class</Button>
      <Button color="inherit" component={Link} to="/profile">Profile</Button>
      {/* <Button color="inherit" component={Link} to="/posts">Posts Manager</Button> */}
      <div className={classes.flex} />
      <LoginButton />
      <Button color="inherit" component={Link} to="">Log In with Facebook</Button>
      <Typography variant="title" color="inherit">
        Gear Up
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(AppHeader);
