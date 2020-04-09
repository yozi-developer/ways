import { locationsSlice, locationsTypes, locations } from "./locations";
import { playerSlice, playerTypes } from "./player";
import { worldSlice, worldStateTypes } from "./worldState";

export {
  locationsSlice,
  playerSlice,
  worldSlice,
  locationsTypes,
  playerTypes,
  worldStateTypes,
  locations,
};

export default {
  locations: locationsSlice.reducer,
  player: playerSlice.reducer,
  world: worldSlice.reducer,
};
