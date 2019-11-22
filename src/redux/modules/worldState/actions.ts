import { INC_DAY, IncDayAction } from "./types";

export function incDay(): IncDayAction {
  return {
    type: INC_DAY
  };
}
