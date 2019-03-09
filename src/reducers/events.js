import {  FETCH_MEMBER_EVENTS} from "../actions/types";

const INITIAL_STATE = [];

// };
  // events: []



export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case  FETCH_MEMBER_EVENTS: 
    return [...state, ...action.payload];

    // case FETCH_MEMBER_EVENT_STAT:
    //   return action.payload;

    default:
      return state;
  }
};
