import { Button as MuiButton, makeStyles } from "@material-ui/core";

import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 0,
    margin: theme.spacing(0.5),
  },
  secondary: {
    backgroundColor: theme.palette.secondary.light,
    "& .MuiButton-label": {
      color: theme.palette.secondary.main,
    },
  },
  primary: {
    backgroundColor: theme.palette.primary.light,
    "& .MuiButton-label": {
      color: theme.palette.primary.main,
    },
  },
}));

export const ActionButton = ({ color, children, onClick }) => {
  const classes = useStyles();

  return (
    <MuiButton className={`${classes.root}`} color={color} onClick={onClick}>
      {children}
    </MuiButton>
  );
};
