import { Observable } from "rxjs";
import * as t from "io-ts";
import { failure } from "io-ts";

export interface ApiService {
  login(login: string, password: string): Observable<{ session: string }>;
}

const SuccessResponseBase = t.type({
  data: t.unknown,
  error: t.literal(0)
});

function isWrappedResponse(t: unknown): t is { data: unknown; error: unknown } {
  if (typeof t !== "object" || t === null) {
    return false;
  }
  return !!("data" in t && "error" in t);
}
function isErrorCode0<T>(t: {
  data: T;
  error: unknown;
}): t is { data: T; error: 0 } {
  return t.error === 0;
}
export const SuccessResponse = new t.Type<t.TypeOf<typeof SuccessResponseBase>>(
  "SuccessResponse",
  SuccessResponseBase.is,
  (u, c) => {
    if (!isWrappedResponse(u)) {
      return failure(new Error("Not an wrapped response"), c);
    }
    if (isErrorCode0(u)) {
      return t.success(u);
    } else {
      // TODO: parsed error code
      return t.failure(new Error(`error code is ${u.error}`), c);
    }
  },
  SuccessResponseBase.encode
);
