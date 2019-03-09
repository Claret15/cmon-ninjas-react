import {FETCH_MEMBER} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MEMBER:
      return action.payload;
    default:
      return state;
  }
};
