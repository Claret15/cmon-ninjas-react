import ninjaApi from "../api";
import {
  FETCH_GUILDS,
  FETCH_GUILD,
  FETCH_GUILD_MEMBERS
} from "./types";

export const fetchGuilds = () => async dispatch => {
  const response = await ninjaApi.get("/guilds");
  dispatch({
    type: FETCH_GUILDS,
    payload: response.data
  });
};

export const fetchGuild = id => async dispatch => {
  const response = await ninjaApi.get(`/guilds/${id}`);
  dispatch({
    type: FETCH_GUILD,
    payload: response.data
  });
};

export const fetchGuildMembers = id => async dispatch => {
  const response = await ninjaApi.get(`/guilds/${id}/members`);
  dispatch({
    type: FETCH_GUILD_MEMBERS,
    payload: response.data
  });
};
