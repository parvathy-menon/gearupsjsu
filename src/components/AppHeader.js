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
      <Button color="inherit" component={Link} to="https://sjsugearup.herokuapp.com/implicit/callback#id_token=eyJraWQiOiJYS3hXcG9qcW1qR1VaRFZIcDNqbFh5TlpqS3VWcTFUT0t3VUFzSkwzRTJnIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwMHVqOG92dXEzaDBISDBIUDM1NiIsInZlciI6MSwiaXNzIjoiaHR0cHM6Ly9kZXYtNTM4MDgyLm9rdGEuY29tIiwiYXVkIjoiMG9haXh6N3prS2pndDdlaXAzNTYiLCJpYXQiOjE1NTczODA5NzYsImV4cCI6MTU1NzM4NDU3NiwianRpIjoiSUQuLXdWaUljWFZkT1ZxcGhCMjFIQWxmbWsxM2p5dGRGTzQ5YjI0UEt2YnNFYyIsImFtciI6WyJwd2QiXSwiaWRwIjoiMDBvaWFvbWk2cXhLSzVQeUIzNTYiLCJub25jZSI6IllzRzc2am8iLCJhdXRoX3RpbWUiOjE1NTczNzk4MDZ9.DC_DftOO0Vife29gT7ekN-8J8Todo7PsAQzIweFUju-l29TJtBd722sCPnwYSp22Xo-XKJuhyuRMA5lfD4n4qAxKR9bXbjpc5Q0LUEsmF9JvaP0Z1pIVfu32gH5TtsGbynGFBR39kFSP3VTKy_ZRWppf7hUBGuuvQNs5C9iRxYG9qNLq1Xau8GFT45qDovzhAwPmX3fT3lestM96wEawKUV8YmZXj-ydjnVqz_ioqDGRyMmVgJsV0VtkY-EPdVqdxEVQPo3RaHPV2zJyTfOL9HzPaLawl89JOP40DNDZI2C29Cdq7mnxlHoeMNDOUA19wd3kn2LRennbdrDevTbpbg&state=WM6D">Log In with Facebook</Button>
      <Typography variant="title" color="inherit">
        Gear Up
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(AppHeader);
