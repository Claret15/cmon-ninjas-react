import { FETCH_GUILDS } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_GUILDS:
      return [ ...action.payload ];
    default:
      return state;
  }
};
