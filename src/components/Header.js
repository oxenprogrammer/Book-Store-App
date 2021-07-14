import {
  AppBar,
  Link,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { memo } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import App from "./App";
import Categories from "./Categories";
import HomeComponent from "./Home.component";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#ffffff",
    height: "5.938rem",
  },
  bookStoreCMS: {
    width: "100rem",
    height: "89.625rem",
    padding: "9.313rem 3.75rem 7.688rem 6.25rem",
    color: "#0290ff",
    fontSize: '1.8rem',
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
}));

// eslint-disable-next-line react/display-name
const Header = memo(() => {
  const classes = useStyles();
  return (
    <Router>
      <main>
        <AppBar position="static">
          <Toolbar className={classes.root} variant="dense">
            <Typography variant="h6" color="inherit">
              <Link className={classes.bookStoreCMS} href="/">
                BookStore CMS
              </Link>
            </Typography>
            <Typography>
              <Link className={classes.link} href="/books">
                Books
              </Link>
              <Link className={classes.link} href="/categories">
                Categories
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/" exact component={HomeComponent} />
          <Route path="/books" component={App} />
          <Route path="/categories" component={Categories} />
        </Switch>
      </main>
    </Router>
  );
});

export default Header;
