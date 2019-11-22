import { INC_DAY, WorldState, WorldStateReducer } from "./types";

const initialState: WorldState = {
  day: 1
};

const worldState: WorldStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC_DAY:
      return { ...state, day: state.day + 1 };
    default:
      return state;
  }
};

export default worldState;
