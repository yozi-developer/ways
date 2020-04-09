import { GameLocation } from "src/redux/types";

export interface LocationsState {
  locations: Record<string, GameLocation>;
}

export enum Locations {
  Home = "home",
  DownTown = "downtown",
}
