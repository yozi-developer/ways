import {
  SET_LOCATION,
  SET_NAME,
  SetLocationAction,
  SetNameAction
} from "./types";
import { Locations } from "../locations/types";

export function setName(name: string): SetNameAction {
  return {
    type: SET_NAME,
    name
  };
}

export function setLocation(locationKey: Locations): SetLocationAction {
  return {
    type: SET_LOCATION,
    locationKey
  };
}
