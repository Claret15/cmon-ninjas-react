import guildMembers from "./guildMembers";
import guilds from "./guilds";
import guild from "./guild";
import guildEventStats from "./guildEventStats";
import member from "./member";
import memberEvents from "./memberEvents";
import memberEventStat from "./memberEventStat";
import events from "./events";
import event from "./event";
import { combineReducers } from "redux";

export default combineReducers({
  guilds,
  guild,
  guildMembers,
  guildEventStats,
  member,
  memberEvents,
  memberEventStat, 
  events, 
  event
});
