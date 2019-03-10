import eventsReducer from "../events";
import { FETCH_EVENTS_LIST } from "../../actions/types";

describe("Initial_State", () => {
  it("should be returned with incorrect action type", () => {
    const action = {
      type: "FETCH_EVEN",
      payload: { id: 1, name: "Ninjas" }
    };

    const initialState = [];

    expect(eventsReducer(undefined, action)).toEqual(initialState);
  });
});

describe("FETCH_EVENTS_LIST", () => {
  it("should return the correct state", () => {
    const action = {
      type: FETCH_EVENTS_LIST,
      payload: [
        {
          id: 50,
          name: "Ultimate Power Couple",
          event_date: "14-Feb-2019",
          event_type: "Raid",
          event_type_id: 1
        },
        {
          id: 49,
          name: "The Savage Lands",
          event_date: "07-Feb-2019",
          event_type: "Crusade",
          event_type_id: 2
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
      },
      {
        id: 49,
        name: "The Savage Lands",
        event_date: "07-Feb-2019",
        event_type: "Crusade",
        event_type_id: 2
      }
    ];

    expect(eventsReducer(initialState, action)).toEqual(expectedState);
  });
});
