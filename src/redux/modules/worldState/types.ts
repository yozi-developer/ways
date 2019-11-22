import { Action, Reducer } from "redux";

export const INC_DAY = "INC_DAY" as const;

export interface WorldState {
  day: number;
}

export interface IncDayAction extends Action<typeof INC_DAY> {}

export type WorldStateAction = IncDayAction;

export type WorldStateReducer = Reducer<WorldState, WorldStateAction>;
