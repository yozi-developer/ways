import { createSlice } from "@reduxjs/toolkit";
import { locations } from "./list";
import { LocationsState } from "./types";

const initialState: LocationsState = {
  locations,
};
export default createSlice({
  name: "locations",
  initialState,
  reducers: {},
});
