import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import locations from "./locations";
import player from "./player";
import world from "./worldState";

export const rootEpic = combineEpics();
export const rootReducer = combineReducers({
  locations,
  player,
  world,
});
