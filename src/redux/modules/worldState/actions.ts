import { IncDayAction } from "./types";

export const INC_DAY = "INC_DAY" as const;

export function incDay(): IncDayAction {
  return {
    type: INC_DAY
  };
}
