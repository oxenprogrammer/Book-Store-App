import {
  AppBar,
  Link,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { Fragment, memo } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import App from "./App";
import Categories from "./Categories";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#ffffff",
    height: "5.938rem",
    display: "flex",
  },
  bookStoreCMS: {
    padding: "0 3.75rem 0 4.25rem",
    color: "#0290ff",
    fontSize: "1.8rem",
    fontWeight: "bolder",
  },
  link: {
    color: "#121212",
    width: "3.688rem",
    height: "1rem",
    margin: "1.125rem 2.563rem 0.688rem 0",
    fontSize: "1.2rem",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: 1.9,
  },
  user: {
    color: "#0290ff",
    marginLeft: "48rem",
    "@media(max-width: 1024px)": {
      marginLeft: "10rem",
    },
  },
}));

// eslint-disable-next-line react/display-name
const Header = memo(() => {
  const classes = useStyles();
  return (
    <Router>
      <main>
        <AppBar position="static">
          <Toolbar className={classes.root} variant="dense">
            <Fragment>
              <Typography variant="h6" color="inherit">
                <Link className={classes.bookStoreCMS} href="#">
                  BookStore CMS
                </Link>
              </Typography>
              <Typography>
                <Link className={classes.link} href="/">
                  Books
                </Link>
                <Link className={classes.link} href="/categories">
                  Categories
                </Link>
              </Typography>
            </Fragment>
            <Icon className={["fas fa-user", classes.user]} />
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/categories" component={Categories} />
        </Switch>
      </main>
    </Router>
  );
});

export default Header;
