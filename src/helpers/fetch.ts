import { Observable, throwError } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { switchMap } from "rxjs/operators";

// TODO: codec?
export function post<T>(
  endpoint: string,
  body: Record<string, unknown>
): Observable<T> {
  return fromFetch(endpoint, {
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  }).pipe(
    switchMap(response =>
      response.ok
        ? response.json()
        : throwError(new Error("response is not ok"))
    )
  );
}
