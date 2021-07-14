import BooksForm from "../containers/BooksForm";
import BooksList from "../containers/BooksList";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    margin: '0 7.8rem',
  }
}))
const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BooksList />
      <BooksForm />
    </div>
  );
};

export default App;
