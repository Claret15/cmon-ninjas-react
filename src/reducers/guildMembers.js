import { FETCH_GUILD_MEMBERS } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_GUILD_MEMBERS:
      return [...action.payload];
    default:
      return state;
  }
};
