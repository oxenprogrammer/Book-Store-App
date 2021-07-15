/* eslint-disable no-unused-vars */
import {
  AppBar,
  Button,
  IconButton,
  Link,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { Fragment, memo } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link as mobileLink,
} from "react-router-dom";

import App from "./App";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import Categories from "./Categories";
import HomeIcon from "@material-ui/icons/Home";
import Icon from "@material-ui/core/Icon";
// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import SchoolIcon from "@material-ui/icons/School";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#ffffff",
    height: "5.938rem",
    display: "grid",
    gridTemplateColumns: "auto 40% auto",
  },
  bookStoreCMS: {
    padding: "0 3.75rem 0 4.25rem",
    color: "#0290ff",
    fontSize: "1.8rem",
    fontWeight: "bolder",
    flexGrow: 1,
    "@media(max-width: 678px)": {
      padding: "0 1rem",
      fontSize: "1.2rem",
    },
    "@media(max-width: 360px)": {
      padding: "0",
    },
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
  },
  menu: {
    color: "#0290ff",
  },
}));

// eslint-disable-next-line react/display-name
const Header = memo(() => {
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };
  return (
    <Router>
      <main>
        <AppBar position="static">
          <Toolbar className={classes.root} variant="dense">
            {isMobile ? (
              <>
                <Typography variant="h6" color="inherit">
                  <Link className={classes.bookStoreCMS} href="#">
                    BookStore CMS
                  </Link>
                </Typography>
                <IconButton
                  color="textPrimary"
                  className={classes.menuButton}
                  edge="start"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon className={classes.menu} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchor}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  KeepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                >
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={mobileLink}
                    to="/"
                  >
                    <ListItemIcon></ListItemIcon>
                    <Typography variant="h6">Books</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={mobileLink}
                    to="/categories"
                  >
                    <ListItemIcon></ListItemIcon>
                    <Typography variant="h6">Categories</Typography>
                  </MenuItem>
                </Menu>
                <Icon className={["fas fa-user", classes.user]} />
              </>
            ) : (
              <>
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
                <Icon className={["fas fa-user", classes.user]} />
              </>
            )}
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
