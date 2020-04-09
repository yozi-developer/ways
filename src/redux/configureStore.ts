import { combineReducers, Store } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { locationsSlice } from "src/redux/modules/locations";
import { playerSlice } from "src/redux/modules/player";
import { worldSlice } from "src/redux/modules/worldState";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { ReducersStateType } from "./helpers";

export const rootEpic = combineEpics();
const reducers = {
  locations: locationsSlice.reducer,
  player: playerSlice.reducer,
  world: worldSlice.reducer,
};
const rootReducer = combineReducers(reducers);

const customizedDefaultMiddleware = getDefaultMiddleware({
  thunk: false,
});

export type StoreState = ReducersStateType<typeof reducers>;
const epicMiddleware = createEpicMiddleware();

export default function createStore(): Store {
  const store: Store<StoreState> = configureStore({
    devTools: process.env.NODE_ENV !== "production",
    middleware: [...customizedDefaultMiddleware, epicMiddleware],
    reducer: rootReducer,
  });

  epicMiddleware.run(rootEpic);

  return store as Store<StoreState, any>;
}
