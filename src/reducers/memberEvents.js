import { FETCH_MEMBER_EVENTS } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_MEMBER_EVENTS:
      return [ ...action.payload ];
    default:
      return state;
  }
};
