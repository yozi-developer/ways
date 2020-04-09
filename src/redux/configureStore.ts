import { combineReducers, Store } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { ReducersStateType } from "./helpers";
import reducers from "./modules";

const customizedDefaultMiddleware = getDefaultMiddleware({
  thunk: false,
});

export type StoreState = ReducersStateType<typeof reducers>;

const epicMiddleware = createEpicMiddleware();
const rootEpic = combineEpics();

const store: Store<StoreState> = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  middleware: [...customizedDefaultMiddleware, epicMiddleware],
  reducer: combineReducers(reducers),
});

epicMiddleware.run(rootEpic);

store.replaceReducer(combineReducers(reducers));
// @ts-ignore
module.hot.accept("./modules", () => {
  const reducers = require("./modules").default;
  const newRootReducer = combineReducers(reducers);
  store.replaceReducer(newRootReducer as any);
});

export default function createStore(): Store {
  return store as Store<StoreState, any>;
}
