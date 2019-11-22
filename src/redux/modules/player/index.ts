import {
  PlayerState,
  SET_NAME,
  PlayerStateReducer,
  SET_LOCATION
} from "./types";
import { Locations } from "../locations/types";

const initialState: PlayerState = {
  locationKey: Locations.Home,
  name: "No name"
};

const locationKey: PlayerStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.name };
    case SET_LOCATION:
      return { ...state, locationKey: action.locationKey };
    default:
      return state;
  }
};

export default locationKey;
