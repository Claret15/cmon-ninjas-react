import { FETCH_GUILDS } from "../actions/types";

const INITIAL_STATE = {
  guilds: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_GUILDS:
      return { ...state, guilds: [...action.payload] };

    default:
      return state;
  }
};
