import { locationsSlice } from "./locations";
import { playerSlice } from "./player";
import { worldSlice } from "./worldState";

export { locationsSlice, playerSlice, worldSlice };

export default {
  locations: locationsSlice.reducer,
  player: playerSlice.reducer,
  world: worldSlice.reducer,
};
