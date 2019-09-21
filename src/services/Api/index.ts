import { ApiService, SuccessResponse } from "./types";
import { injectable } from "inversify";
import { Observable, throwError } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { map, switchMap } from "rxjs/operators";
import { isLeft } from "fp-ts/lib/Either";
import { PathReporter } from "io-ts/lib/PathReporter";

@injectable()
class Api implements ApiService {
  public login(
    login: string,
    password: string
  ): Observable<{ session: string }> {
    const formData = new FormData();
    formData.append("login", login);
    formData.append("password", password);
    return fromFetch("https://ru38.waysofhistory.com/aj_login", {
      body: formData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST"
    }).pipe(
      switchMap(response =>
        response.ok
          ? response.json()
          : throwError(new Error("Network response was not ok."))
      ),
      map(json => {
        const v = SuccessResponse.decode(json);
        if (isLeft(v)) {
          throw new Error(PathReporter.report(v).join(";"));
        }
        const data = v.right.data;
        function hasSessionField(u: unknown): u is { session: unknown } {
          return typeof u === "object" && !!u && "session" in u;
        }
        if (hasSessionField(data)) {
          const { session } = data;
          if (typeof session === "string") {
            return { session };
          }
        }
        throw new Error("Wrong format");
      })
    );
  }
}

export default Api;
