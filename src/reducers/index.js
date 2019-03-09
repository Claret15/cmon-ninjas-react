import { combineReducers } from "redux";
import guildMembers from "./guildMembers";
import guilds from "./guilds";
import guild from "./guild";
import member from "./member";
import memberEvents from "./memberEvents";
import memberEventStat from "./memberEventStat";
import events from "./events";

export default combineReducers({
  guilds,
  guild,
  guildMembers,
  member,
  memberEvents,
  memberEventStat
});
