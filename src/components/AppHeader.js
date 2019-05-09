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

window.fbAsyncInit = function() {
  FB.init({
    appId: "451387118765518",
    cookie: true,
    xfbml: true,
    version: "v3.3"
  });

  FB.AppEvents.logPageView();
};

FB.getLoginStatus(function(response) {
  statusChangeCallback(response);
});

(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

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
      <form action="https://dev-538082.okta.com/oauth2/v1/authorize?idp=0oakfh9azKLvfTstn356&client_id=0oaixz7zkKjgt7eip356&response_type=id_token&response_mode=fragment&scope=openid&redirect_uri=https%3A%2F%2Fsjsugearup.herokuapp.com%2Fimplicit%2Fcallback&state=WM6D&nonce=YsG76jo">
        <button type="submit">Login with Facebook</button>
      </form>
      <Typography variant="title" color="inherit">
        Gear Up
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(AppHeader);
