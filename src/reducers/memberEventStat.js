import { FETCH_MEMBER_EVENT_STAT, CLEAR_MEMBER_EVENT_STAT } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MEMBER_EVENT_STAT:
      return action.payload;
    case CLEAR_MEMBER_EVENT_STAT:
      return action.payload;
    default:
      return state;
  }
};
