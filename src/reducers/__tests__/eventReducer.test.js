import eventReducer from "../event";
import { FETCH_EVENT } from "../../actions/types";

describe("Initial_State", () => {
  it("should be returned with incorrect action type", () => {
    const action = {
      type: "FETCH_EVEN",
      payload: { id: 1, name: "Ninjas" }
    };

    const initialState = {};

    expect(eventReducer(undefined, action)).toEqual(initialState);
  });
});

describe("FETCH_EVENT", () => {
  it("should return the correct state", () => {
    const action = {
      type: FETCH_EVENT,
      payload: [
        {
          id: 50,
          name: "Ultimate Power Couple",
          event_date: "14-Feb-2019",
          event_type: "Raid",
          event_type_id: 1
        }
      ]
    };

    const initialState = [];

    const expectedState = [
      {
        id: 50,
        name: "Ultimate Power Couple",
        event_date: "14-Feb-2019",
        event_type: "Raid",
        event_type_id: 1
      }
    ];

    expect(eventReducer(initialState, action)).toEqual(expectedState);
  });
});
