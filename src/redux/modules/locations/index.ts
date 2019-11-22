import { LocationsState, LocationsStateReducer } from "./types";
import { locations } from "./list";

const initialState: LocationsState = {
  locations
};

const locationsState: LocationsStateReducer = (
  state = initialState,
  action
) => {
  return state;
};

export default locationsState;
