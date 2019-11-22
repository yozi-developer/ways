import { Action, Reducer } from "redux";

export const SET_NAME = "SET_NAME" as const;

export interface PlayerState {
  name: string;
}

export interface SetNameAction extends Action<typeof SET_NAME> {
  name: string;
}

export type PlayerStateAction = SetNameAction;

export type PlayerStateReducer = Reducer<PlayerState, PlayerStateAction>;
