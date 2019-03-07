import guildsReducer from "../guildsReducer";
import { FETCH_GUILDS} from "../../actions/types";


describe("Initial_State", () => {

  it("is returned if action type is incorrect", () => {
    const action = {
      type: 'FETCH_GUIL',
      payload: [{ id: 1, name: "Ninjas" }]
    };

    const initialState = {
      guilds: []
    };

    expect(guildsReducer(undefined, action)).toEqual(initialState);

  });
});

describe("FETCH_GUILDS", () => {
  it("returns the correct state", () => {
    const action = {
      type: FETCH_GUILDS,
      payload: [{ id: 1, name: "Ninjas" }]
    };

    const initialState = {
      guilds: [],
    };

    // const expectedState = [{ id: 1, name: "Ninjas" }];
    const expectedState = {
      guilds: [{ id: 1, name: "Ninjas" }],
    };
    
    expect(guildsReducer(initialState, action)).toEqual(expectedState);
  });
});