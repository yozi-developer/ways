import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerState } from "./types";
import { Locations } from "../locations/types";

const initialState: PlayerState = {
  locationKey: Locations.Home,
  name: "No name",
};
export default createSlice({
  name: "player",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<{ name: string }>) => {
      state.name = action.payload.name;
    },
    setLocation: (state, action: PayloadAction<{ locationKey: Locations }>) => {
      state.locationKey = action.payload.locationKey;
    },
  },
});
