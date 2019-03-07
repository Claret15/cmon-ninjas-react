import { fetchGuilds, fetchGuild } from "../../actions";
import {FETCH_GUILDS, FETCH_GUILD } from "../types";

describe("fetchGuilds", () => {
  it("has the correct type", () => {
    const action = fetchGuilds();
    action(() => {
      expect(action.type).toEqual(FETCH_GUILDS);
    })
  });

  it("has the correct payload", () => {
    const action = fetchGuilds();
    action(()=> {
      expect(action.payload).toEqual([]);
    })
  });
});

describe("fetchGuilds", () => {
  it("has the correct type", () => {
    const action = fetchGuilds();
    action(() => {
      expect(action.type).toEqual(FETCH_GUILD);
    })
  });

  // it("has the correct payload", () => {
  //   const action = fetchGuilds([]);
  //   expect(action.payload).toEqual([]);
  // });
});
