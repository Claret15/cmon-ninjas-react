import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./nav/Nav";
// import GuildList from "../container/guilds/GuildList";
import GuildList from "../containers/guilds/GuildList";
import GuildShow from "../containers/guilds/GuildShow";
import GuildEvents from "./events/GuildEvents";
import GuildEventStats from "../containers/event-stats/GuildEventStats";


const Guild = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/guilds" component={GuildList} />
        <Route exact path="/guilds/:id" component={GuildShow} />
        <Route exact path="/guilds/:id/events" component={GuildEvents} />
        <Route path="/guilds/:g_id/events/:e_id" component={GuildEventStats} />
        <Redirect to="/guilds" />
      </Switch>
    </div>
  );
};

export default Guild;
