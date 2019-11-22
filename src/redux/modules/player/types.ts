import { Action, Reducer } from "redux";
import { Locations } from "../locations/types";

export const SET_NAME = "SET_NAME" as const;
export const SET_LOCATION = "SET_LOCATION" as const;

export interface PlayerState {
  name: string;
  locationKey: Locations;
}

export interface SetNameAction extends Action<typeof SET_NAME> {
  name: string;
}

export interface SetLocationAction extends Action<typeof SET_LOCATION> {
  locationKey: Locations;
}

export type PlayerStateAction = SetNameAction | SetLocationAction;

export type PlayerStateReducer = Reducer<PlayerState, PlayerStateAction>;
