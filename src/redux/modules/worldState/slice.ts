import { createSlice } from "@reduxjs/toolkit";
import { WorldState } from "./types";

const initialState: WorldState = {
  day: 1,
};
export default createSlice({
  name: "world",
  initialState,
  reducers: {
    incDay: (state) => {
      state.day += 1;
    },
  },
});
