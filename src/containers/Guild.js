import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "../Components/nav/Nav";
import GuildList from "../Components/guilds/GuildList";
import GuildShow from "../Components/guilds/GuildShow";
import GuildEvents from "../Components/events/GuildEvents";
import GuildEventStats from "../Components/event-stats/GuildEventStats";

const Guild = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/guilds" component={GuildList} />
        <Route exact path="/guilds/:id" component={GuildShow} />
        <Route exact path="/guilds/:id/events" component={GuildEvents} />
        <Route path="/guilds/:id/events/:id" component={GuildEventStats} />
        <Redirect to="/guilds" />
      </Switch>
    </div>
  );
};

export default Guild;
