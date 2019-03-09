import memberReducer from "../member";
import { FETCH_MEMBER } from "../../actions/types";

describe("Initial_State", () => {
  it("should be returned with incorrect action type", () => {
    const action = {
      type: "FETCH_MEM",
      payload: { id: 1, name: "Ninjas" }
    };

    const initialState = {};

    expect(memberReducer(undefined, action)).toEqual(initialState);
  });
});

describe("FETCH_MEMBER", () => {
  it("should return the correct state", () => {
    const action = {
      type: FETCH_MEMBER,
      payload: {id: 46, name: "1215KY", guild: "Ninjas", guild_id: 1, active: true}
    };

    const initialState = [];

    const expectedState = {id: 46, name: "1215KY", guild: "Ninjas", guild_id: 1, active: true};

    expect(memberReducer(initialState, action)).toEqual(expectedState);
  });
});
