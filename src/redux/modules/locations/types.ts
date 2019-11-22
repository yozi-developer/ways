import { Reducer } from "redux";
import { GameLocation } from "../../types";

export interface LocationsState {
  locations: Record<string, GameLocation>;
}

export type LocationsStateReducer = Reducer<LocationsState>;

export enum Locations {
  Home = "home",
  DownTown = "downtown"
}
