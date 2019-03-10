import guildEventStatsReducer from "../guildEventStats";
import { FETCH_GUILD_EVENT_STATS } from "../../actions/types";

describe("Initial_State", () => {
  it("should be returned with incorrect action type", () => {
    const action = {
      type: "FETCH_GUILD_EVENT_ST",
      payload: [{ id: 1, name: "Ninjas" }]
    };

    const initialState = [];

    expect(guildEventStatsReducer(undefined, action)).toEqual(initialState);
  });
});

describe("FETCH_GUILD_EVENT_STATS", () => {
  it("should return the correct state", () => {
    const action = {
      type: FETCH_GUILD_EVENT_STATS,
      payload: {
        name: "Chris",
        event: "The Depths Below",
        event_date: "10-Jan-2019"
      }
    };

    const initialState = {};

    const expectedState = {
      name: "Chris",
      event: "The Depths Below",
      event_date: "10-Jan-2019"
    };

    expect(guildEventStatsReducer(initialState, action)).toEqual(expectedState);
  });
});
