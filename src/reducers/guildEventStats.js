import { FETCH_GUILD_EVENT_STATS } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_GUILD_EVENT_STATS:
      return action.payload;
    default:
      return state;
  }
};

