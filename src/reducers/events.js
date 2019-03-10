import { FETCH_EVENTS_LIST } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_EVENTS_LIST:
      return [...action.payload];
    default:
      return state;
  }
};
