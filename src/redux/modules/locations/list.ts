import { GameLocation } from "../../types";
import { Locations } from "./types";

const Home: GameLocation = {
  name: "Home",
};

const DownTown: GameLocation = {
  name: "DownTown",
};

export const locations = {
  [Locations.Home]: Home,
  [Locations.DownTown]: DownTown,
};
