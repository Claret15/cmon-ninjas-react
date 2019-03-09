import memberEventStatReducer from "../memberEventStat";
import { FETCH_MEMBER_EVENT_STAT } from "../../actions/types";

describe("Initial_State", () => {
  it("should be returned with incorrect action type", () => {
    const action = {
      type: "FETCH_MEMBER_EVEN",
      payload: [{ id: 1, name: "Ninjas" }]
    };

    const initialState = {};

    expect(memberEventStatReducer(undefined, action)).toEqual(initialState);
  });
});

describe("FETCH_MEMBER_EVENT_STAT", () => {
  it("should return the correct state", () => {
    const action = {
      type: FETCH_MEMBER_EVENT_STAT,
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

    expect(memberEventStatReducer(initialState, action)).toEqual(expectedState);
  });
});
