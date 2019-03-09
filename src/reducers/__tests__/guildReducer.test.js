import guildReducer from "../guild";
import { FETCH_GUILD } from "../../actions/types";

describe("Initial_State", () => {
  it("should be returned with incorrect action type", () => {
    const action = {
      type: "FETCH_GUIL",
      payload: { id: 1, name: "Ninjas" }
    };

    const initialState = {};

    expect(guildReducer(undefined, action)).toEqual(initialState);
  });
});

describe("FETCH_GUILD", () => {
  it("should return the correct state", () => {
    const action = {
      type: FETCH_GUILD,
      payload: { id: 1, name: "Ninjas" }
    };

    const initialState = [];

    const expectedState = { id: 1, name: "Ninjas" };

    expect(guildReducer(initialState, action)).toEqual(expectedState);
  });
});
