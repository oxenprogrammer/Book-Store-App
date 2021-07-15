import {
  Button,
  CircularProgress,
  Divider,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

import { Fragment } from "react";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: "1rem",
    justifyContent: "space-between",
    width: "100%",
  },
  buttons: {
    flexDirection: "row",
  },
  category: {
    fontSize: "0.875rem",
    opacity: "50%",
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.4rem",
    color: "#000000",
  },
  author: {
    color: "#0391FF",
    opacity: 0.6,
    textTransform: "capitalize",
  },
  read: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  readItem: {
    padding: "0.2rem",
  },
  MuiCircularProgress: {
    color: "#0290ff",
  },
  percent: {
    margin: "0.063rem 7.063rem 0 0.688rem",
    fontSize: "2rem",
  },
  completed: {
    color: "#C1C0C0",
  },
  chapter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    alignContent: "flex-start",
    justifyContent: "center",
  },
  current: {
    opacity: 0.5,
    fontFamily: "RobotoSlab",
    fontSize: "0.8rem",
    fontWeight: 300,
    color: "#121212",
  },
  number: {
    marginBottom: "0.5rem",
  },
  button: {
    backgroundColor: "#0290ff",
    color: "#ffffff",
    fontWeight: "lighter",
  },
}));

export const Book = (props) => {
  const { id, title, category, author, read, handleRemoveBook } = props;
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container className={classes.root}>
        <Grid item>
          <Typography className={classes.category}>{category}</Typography>
          <Typography className={classes.title}>{title}</Typography>
          <Typography className={classes.author}>{author}</Typography>
          <Grid>
            <Button className={classes.author}>Comments</Button>
            <Button
              className={classes.author}
              onClick={() => handleRemoveBook(id)}
            >
              Remove
            </Button>
            <Button className={classes.author}>Edit</Button>
          </Grid>
        </Grid>
        <Grid item className={classes.read}>
          <Grid className={classes.readItem}>
            <CircularProgress
              className={classes.MuiCircularProgress}
              size={50}
              thickness={3}
              variant="static"
              value={read}
            />
          </Grid>
          <Grid className={classes.readItem}>
            <Grid className={classes.percent}>{read}%</Grid>
            <Grid className={classes.completed}>Completed</Grid>
          </Grid>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item className={classes.chapter}>
          <Typography className={classes.current}>CURRENT CHAPTER</Typography>
          <Typography className={classes.number}>Chapter 17</Typography>
          <Button className={classes.button} variant="contained">
            UPDATE PROGRESS
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
    author: PropTypes.string,
    read: PropTypes.number,
  }),
};
Book.defaultProps = {
  book: null,
};
