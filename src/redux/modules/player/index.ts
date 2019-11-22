import { PlayerState, SET_NAME, PlayerStateReducer } from "./types";

const initialState: PlayerState = {
  name: "No name"
};

const worldState: PlayerStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.name };
    default:
      return state;
  }
};

export default worldState;
