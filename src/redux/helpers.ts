import { ReducersMapObject } from "redux";

export type ReducersStateType<R> = R extends ReducersMapObject<infer S, any>
  ? S
  : never;
