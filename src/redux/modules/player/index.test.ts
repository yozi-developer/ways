import playerState from "./index";
import { setName } from "./actions";
import { SET_NAME, SetNameAction } from "./types";

describe("actions", () => {
  it("should create an action to set player's day", () => {
    // FIXME: honestly it is a useless test, typescript covers it completely
    const expectedName = "new user name";
    const expectedAction: SetNameAction = {
      type: SET_NAME,
      name: expectedName
    };
    expect(setName(expectedName)).toEqual(expectedAction);
  });
});

describe("player state reducer", () => {
  it("should handle SET_NAME", () => {
    const expectedName = "bar";
    expect(playerState(undefined, setName(expectedName))).toEqual({
      name: expectedName
    });
  });
});
