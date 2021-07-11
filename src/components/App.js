import BooksForm from "../containers/BooksForm";
import BooksList from "../containers/BooksList";

const App = () => {
  return <div className="App">
    <BooksList />
    <BooksForm />
  </div>;
};

export default App;
