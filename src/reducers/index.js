import { combineReducers } from "redux";
import guildReducer from "./guildReducer";
import guildsReducer from "./guildsReducer";

export default combineReducers({
  guilds: guildsReducer,
  guild: guildReducer
});
