import { SET_NAME, SetNameAction } from "./types";

export function setName(name: string): SetNameAction {
  return {
    type: SET_NAME,
    name
  };
}
