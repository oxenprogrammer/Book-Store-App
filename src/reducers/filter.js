import { CHANGE_FILTER } from "../actions";

const initialState = "All";

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return [...state, action.payload];
    default:
      return state;
  }
};
