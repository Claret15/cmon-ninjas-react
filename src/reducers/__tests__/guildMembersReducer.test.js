import guildMembersReducer from "../guildMembers";
import { FETCH_GUILD_MEMBERS } from "../../actions/types";

describe("Initial_State", () => {
  it("should be returned with incorrect action type", () => {
    const action = {
      type: "FETCH_GUIL",
      payload: [{ id: 1, name: "Ninjas" }]
    };

    const initialState = [];

    expect(guildMembersReducer(undefined, action)).toEqual(initialState);
  });
});

describe("FETCH_GUILD_MEMBERS", () => {
  it("should return the correct state", () => {
    const action = {
      type: FETCH_GUILD_MEMBERS,
      payload: [
        { id: 46, name: "ASDF", guild: "Ninjas", active: true },
        { id: 101, name: "ASD BoX XASD", guild: "Ninjas", active: true },
        { id: 96, name: "WERW", guild: "Ninjas", active: true }
      ]
    };

    const initialState = [];

    const expectedState = [
      { id: 46, name: "ASDF", guild: "Ninjas", active: true },
      { id: 101, name: "ASD BoX XASD", guild: "Ninjas", active: true },
      { id: 96, name: "WERW", guild: "Ninjas", active: true }
    ];

    expect(guildMembersReducer(initialState, action)).toEqual(expectedState);
  });
});
