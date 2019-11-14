import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import worldState from "./worldState";

export const rootEpic = combineEpics();
export const rootReducer = combineReducers({
  worldState
});
