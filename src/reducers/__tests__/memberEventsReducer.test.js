
import memberEventsReducer from "../memberEvents";
import { FETCH_MEMBER_EVENTS } from "../../actions/types";

describe("Initial_State", () => {
  it("should be returned with incorrect action type", () => {
    const action = {
      type: "FETCH_MEMBER_EVEN",
      payload: [{ id: 1, name: "Ninjas" }]
    };

    const initialState = [];

    expect(memberEventsReducer(undefined, action)).toEqual(initialState);
  });
});

describe("FETCH_MEMBER_EVENTS", () => {
  it("should return the correct state", () => {
    const action = {
      type: FETCH_MEMBER_EVENTS,
      payload: [
        {
          name: "Chris",
          event: "The Depths Below",
          event_date: "10-Jan-2019"
        },
        {
          name: "Chris",
          event: "Assault On Lupo Colossus",
          event_date: "03-Jan-2019"
        },
        {
          name: "Chris",
          event: "The Clock Rewinds",
          event_date: "27-Dec-2018"
        }
      ]
    };

    const initialState = [];

    const expectedState = [
      {
        name: "Chris",
        event: "The Depths Below",
        event_date: "10-Jan-2019"
      },
      {
        name: "Chris",
        event: "Assault On Lupo Colossus",
        event_date: "03-Jan-2019"
      },
      {
        name: "Chris",
        event: "The Clock Rewinds",
        event_date: "27-Dec-2018"
      }
    ];

    expect(memberEventsReducer(initialState, action)).toEqual(expectedState);
  });
});
