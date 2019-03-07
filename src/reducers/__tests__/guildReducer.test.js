import guildReducer from "../guildReducer";
import { FETCH_GUILDS, FETCH_GUILD } from "../../actions/types";


describe("Initial_State", () => {
  
  it("is returned if action type is incorrect", () => {
    const action = {
      type: 'asdfa',
      payload: [{ id: 1, name: "Ninjas" }]
    };

    const initialState = [];

    expect(guildReducer(undefined, action)).toEqual(initialState);

  });
});

describe("FETCH_GUILD", () => {
  it("returns the correct state", () => {
    const action = {
      type: FETCH_GUILD,
      payload: [{ id: 1, name: "Ninjas" }]
    };

    const expectedState = [{ id: 1, name: "Ninjas" }];

    expect(guildReducer([], action)).toEqual(expectedState);
  });
});

describe("FETCH_GUILDS", () => {
  it("returns the correct state", () => {
    const action = {
      type: FETCH_GUILDS,
      payload: [{ id: 1, name: "Ninjas" }]
    };

    const expectedState = [{ id: 1, name: "Ninjas" }];
    
    expect(guildReducer([], action)).toEqual(expectedState);
  });
});