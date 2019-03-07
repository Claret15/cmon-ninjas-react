import { combineReducers } from "redux";
import guildReducer from "./guildReducer";

export default combineReducers({
  guilds: guildReducer
})
