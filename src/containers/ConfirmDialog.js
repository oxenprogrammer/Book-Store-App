import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(12),
  },
  dialogContent: {
    textAlign: "center",
  },
  dialogAction: {
    justifyContent: "center",
  },
  defaultButton: {
    backgroundColor: "#f4d1c9",
  },
}));

export const ConfirmDialog = (props) => {
  const { onConfirm, confirmDialog, setConfirmDialog } = props;
  const classes = useStyles();
  return (
    <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
      <DialogContent className={classes.dialogContent}>
        <Typography variant="h6">{confirmDialog.title}</Typography>
        <Typography variant="subtitle2">{confirmDialog.subTitle}</Typography>
      </DialogContent>
      <DialogActions className={classes.dialogAction}>
        <Button
          className={classes.defaultButton}
          color="default"
          onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
        >
          No
        </Button>
        <Button
          className={classes.defaultButton}
          color="primary"
          onClick={onConfirm}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};
