import { books } from "./books";
import { combineReducers } from "redux";
import { filterReducer } from "./filter";

export const reducer = combineReducers({ books, filterReducer });
