import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  withStyles
} from "@material-ui/core";

import LoginButton from "./LoginButton";

const styles = {
  flex: {
    flex: 1
  }
};

const AppHeader = ({ classes }) => (
  <AppBar position="static" color="secondary">
    <Toolbar>
      <Button color="inherit" component={Link} to="/loginhome">
        Home
      </Button>
      <Button color="inherit" component={Link} to="/addclass">
        Add Class
      </Button>
      <Button color="inherit" component={Link} to="/dropclass">
        Drop Class
      </Button>
      <Button color="inherit" component={Link} to="/profile">
        Profile
      </Button>
      {/* <Button color="inherit" component={Link} to="/posts">Posts Manager</Button> */}
      <div className={classes.flex} />
      <LoginButton />
      <a
        href="https://dev-538082.okta.com/oauth2/v1/authorize?idp=0oakfh9azKLvfTstn356&client_id=0oaixz7zkKjgt7eip356&response_type=id_token&response_mode=fragment&scope=openid&redirect_uri=https%3A%2F%2Fsjsugearup.herokuapp.com%2Fimplicit%2Fcallback&state=WM6D&nonce=YsG76jo"
        class="button"
      >
        {" "}
        Log In with Facebook{" "}
      </a>
      <Typography variant="title" color="inherit">
        Gear Up
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(AppHeader);
