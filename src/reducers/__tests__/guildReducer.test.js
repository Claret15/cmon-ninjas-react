import guildReducer from "../guildReducer";
import {FETCH_GUILD, FETCH_GUILD_MEMBERS } from "../../actions/types";


describe("Initial_State", () => {

  it("is returned if action type is incorrect", () => {
    const action = {
      type: 'FETCH_GUIL',
      payload: [{ id: 1, name: "Ninjas" }]
    };

    const initialState = {
      guild: {},
      members: []
    };

    expect(guildReducer(undefined, action)).toEqual(initialState);

  });
});

describe("FETCH_GUILD", () => {
  it("returns the correct state", () => {
    const action = {
      type: FETCH_GUILD,
      payload: { id: 1, name: "Ninjas" }
    };
    
    const initialState = {
      guild: {},
      members: []
    };

    const expectedState = {
      guild: { id: 1, name: "Ninjas" },
      members: []
    };

    expect(guildReducer(initialState, action)).toEqual(expectedState);
  });
});

describe("FETCH_GUILD_MEMBERS", () => {
  it("returns the correct state", () => {
    const action = {
      type: FETCH_GUILD_MEMBERS,
      payload: [
        {id: 46, name: "ASDF", guild: "Ninjas", active: true},
        {id: 101, name: "ASD BoX XASD", guild: "Ninjas", active: true},
        {id: 96, name: "WERW", guild: "Ninjas", active: true}
      ]
    };
    
    const initialState = {
      guild: {},
      members: []
    };

    const expectedState = {
      guild: {},
      members: [
        {id: 46, name: "ASDF", guild: "Ninjas", active: true},
        {id: 101, name: "ASD BoX XASD", guild: "Ninjas", active: true},
        {id: 96, name: "WERW", guild: "Ninjas", active: true}
      ]
    };

    expect(guildReducer(initialState, action)).toEqual(expectedState);
  });
});