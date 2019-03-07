import { FETCH_GUILD, FETCH_GUILD_MEMBERS } from "../actions/types";

const INITIAL_STATE = {
  guild: {},
  members: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_GUILD:
      return { ...state, guild: action.payload };

    case FETCH_GUILD_MEMBERS:
      return { ...state, members: [...action.payload] };

    default:
      return state;
  }
};
