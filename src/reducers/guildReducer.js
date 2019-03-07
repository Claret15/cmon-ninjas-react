import { FETCH_GUILDS, FETCH_GUILD } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_GUILDS:
      return  action.payload;

    case FETCH_GUILD:
      return action.payload;

    default:
      return state;
  }
};
