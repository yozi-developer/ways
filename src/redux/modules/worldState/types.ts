import { INC_DAY } from "./actions";
import { Action, Reducer } from "redux";

export interface WorldState {
    day: number;
}

export interface IncDayAction extends Action<typeof INC_DAY> {}

export type WorldStateAction = IncDayAction;

export type WorldStateReducer = Reducer<WorldState, WorldStateAction>;
