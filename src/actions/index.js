import ninjaApi from "../api";
import {
  FETCH_GUILDS,
  FETCH_GUILD,
  FETCH_GUILD_MEMBERS,
  FETCH_MEMBER_EVENT_STAT,
  FETCH_MEMBER_EVENTS
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

export const fetchMemberEventStat = (m_id, e_id) => async dispatch => {
  const response = await ninjaApi.get(`/members/${m_id}/events/${e_id}`);
  dispatch({
    type: FETCH_MEMBER_EVENT_STAT,
    payload: response.data
  });
};

export const fetchMemberEvents = id => async dispatch => {
  const response = await ninjaApi.get(`/members/${id}/events`);
  dispatch({
    type: FETCH_MEMBER_EVENTS,
    payload: response.data
  });
};

