import api from "../../api";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import {
  fetchGuilds,
  fetchGuild,
  fetchGuildMembers,
  fetchMember,
  fetchMemberEventStat,
  fetchMemberEvents,
  fetchEventsList,
  fetchGuildEventStats,
  fetchEvent
} from "../../actions";
import {
  FETCH_GUILDS,
  FETCH_GUILD,
  FETCH_GUILD_MEMBERS,
  FETCH_MEMBER,
  FETCH_MEMBER_EVENT_STAT,
  FETCH_MEMBER_EVENTS,
  FETCH_EVENTS_LIST,
  FETCH_GUILD_EVENT_STATS,
  FETCH_EVENT
} from "../types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

beforeEach(() => {
  moxios.install(api);
});
afterEach(() => {
  moxios.uninstall(api);
});

describe("fetchGuilds", () => {
  it("should return correct action type - async test", async done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [
          { id: 1, name: "Ninjas" },
          { id: 2, name: "Pyra" },
          { id: 3, name: "Fire" }
        ]
      });
    });

    const expectedActions = [
      {
        type: FETCH_GUILDS,
        payload: [
          { id: 1, name: "Ninjas" },
          { id: 2, name: "Pyra" },
          { id: 3, name: "Fire" }
        ]
      }
    ];

    const store = mockStore({});

    await store.dispatch(fetchGuilds()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    done();
  });
});

describe("fetchGuild", () => {
  it("should return correct action type", async done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { id: 1, name: "Ninjas" }
      });
    });

    const expectedActions = [
      {
        type: FETCH_GUILD,
        payload: { id: 1, name: "Ninjas" }
      }
    ];

    const store = mockStore({});

    await store.dispatch(fetchGuild()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    done();
  });
});

describe("fetchMember", () => {
  it("should return correct action type", async done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { id: 46, name: "Alpha", guild: "Ninjas", active: true }
      });
    });

    const expectedActions = [
      {
        type: FETCH_MEMBER,
        payload: { id: 46, name: "Alpha", guild: "Ninjas", active: true }
      }
    ];

    const store = mockStore({});

    await store.dispatch(fetchMember()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    done();
  });
});

describe("fetchMemberEventStat", () => {
  it("should return correct action type", async done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [
          {
            name: "Bailiff Geoffrey Minra",
            event: "The First Dragoon",
            event_date: "11-Oct-2018",
            position: 24,
            guild_pts: 7696376150,
            solo_pts: 7696376150,
            league: "Kings",
            solo_rank: 96,
            global_rank: 11115
          }
        ]
      });
    });

    const expectedActions = [
      {
        type: FETCH_MEMBER_EVENT_STAT,
        payload: {
          name: "Bailiff Geoffrey Minra",
          event: "The First Dragoon",
          event_date: "11-Oct-2018",
          position: 24,
          guild_pts: 7696376150,
          solo_pts: 7696376150,
          league: "Kings",
          solo_rank: 96,
          global_rank: 11115
        }
      }
    ];

    const store = mockStore({});

    await store.dispatch(fetchMemberEventStat()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    done();
  });
});

describe("fetchMemberEvents", () => {
  it("should return correct action type", async done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [
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
      });
    });

    const expectedActions = [
      {
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
      }
    ];

    const store = mockStore({});

    await store.dispatch(fetchMemberEvents()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    done();
  });
});

describe("fetchEventsList", () => {
  it("should return correct action type", async done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [
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
      });
    });

    const expectedActions = [
      {
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
      }
    ];

    const store = mockStore({});

    await store.dispatch(fetchEventsList()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    done();
  });
});

describe("fetchGuildMembers", () => {
  it("should return correct action type", async done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [
          { id: 46, name: "Alpha", guild: "Ninjas", active: true },
          { id: 101, name: "Bravo", guild: "Ninjas", active: true },
          { id: 96, name: "Charlie", guild: "Ninjas", active: true }
        ]
      });
    });

    const expectedActions = [
      {
        type: FETCH_GUILD_MEMBERS,
        payload: [
          { id: 46, name: "Alpha", guild: "Ninjas", active: true },
          { id: 101, name: "Bravo", guild: "Ninjas", active: true },
          { id: 96, name: "Charlie", guild: "Ninjas", active: true }
        ]
      }
    ];

    const store = mockStore({});

    await store.dispatch(fetchGuildMembers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    done();
  });
});

describe("fetchGuildEventStats", () => {
  it("should return correct action type", async done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [
          {
            event: "Ultimate Power Couple",
            event_date: "14-Feb-2019",
            event_id: 51,
            global_rank: 62,
            guild_pts: 11206268516,
            league: "Legends",
            name: "King Minotaur",
            position: 1,
            solo_pts: 120791391238,
            solo_rank: 27
          },
          {
            event: "Ultimate Power Couple",
            event_date: "14-Feb-2019",
            event_id: 51,
            global_rank: 2138,
            guild_pts: 10635579749,
            league: "Soldiers",
            name: "Grand Master Jenn",
            position: 2,
            solo_pts: 25105697912,
            solo_rank: 1
          }
        ]
      });
    });

    const expectedActions = [
      {
        type: FETCH_GUILD_EVENT_STATS,
        payload: [
          {
            event: "Ultimate Power Couple",
            event_date: "14-Feb-2019",
            event_id: 51,
            global_rank: 62,
            guild_pts: 11206268516,
            league: "Legends",
            name: "King Minotaur",
            position: 1,
            solo_pts: 120791391238,
            solo_rank: 27
          },
          {
            event: "Ultimate Power Couple",
            event_date: "14-Feb-2019",
            event_id: 51,
            global_rank: 2138,
            guild_pts: 10635579749,
            league: "Soldiers",
            name: "Grand Master Jenn",
            position: 2,
            solo_pts: 25105697912,
            solo_rank: 1
          }
        ]
      }
    ];

    const store = mockStore({});

    await store.dispatch(fetchGuildEventStats()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    done();
  });
});

describe("fetchEvent", () => {
  it("should return correct action type", async done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [
          {
            id: 50,
            name: "Ultimate Power Couple",
            event_date: "14-Feb-2019",
            event_type: "Raid",
            event_type_id: 1
          }
        ]
      });
    });

    const expectedActions = [
      {
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
      }
    ];

    const store = mockStore({});

    await store.dispatch(fetchEvent()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    done();
  });
});