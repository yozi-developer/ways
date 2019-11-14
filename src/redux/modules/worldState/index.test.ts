import worldState from "./index";
import { INC_DAY, incDay } from "./actions";
import { IncDayAction } from "./types";

describe("actions", () => {
  it("should create an action to increment the day", () => {
    // FIXME: honestly it is a useless test, typescript covers it completely
    const expectedAction: IncDayAction = {
      type: INC_DAY
    };
    expect(incDay()).toEqual(expectedAction);
  });
});

describe("world state reducer", () => {
  it("should handle INC_DAY", () => {
    expect(worldState(undefined, incDay())).toEqual({
      day: 2
    });
  });
});
