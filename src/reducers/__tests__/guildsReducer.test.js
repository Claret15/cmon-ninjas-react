import guildsReducer from "../guilds";
import { FETCH_GUILDS } from "../../actions/types";

describe("Initial_State", () => {
  it("should be returned with incorrect action type", () => {
    const action = {
      type: "FETCH_GUI",
      payload: [{ id: 1, name: "Ninjas" }]
    };

    const initialState = [];

    expect(guildsReducer(undefined, action)).toEqual(initialState);
  });
});

describe("FETCH_GUILDS", () => {
  it("should return the correct state", () => {
    const action = {
      type: FETCH_GUILDS,
      payload: [{ id: 1, name: "Ninjas" }]
    };

    const initialState = [];
    const expectedState = [{ id: 1, name: "Ninjas" }];

    expect(guildsReducer(initialState, action)).toEqual(expectedState);
  });
});
