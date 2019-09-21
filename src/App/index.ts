import { IApp } from "./types";
import { injectToken } from "inversify-token";
import { ApiServiceToken } from "../di/tokens";

export default class App implements IApp {
  constructor(
    @injectToken(ApiServiceToken) private apiService: ApiServiceToken
  ) {}
  public signIn(): void {
    this.apiService
  }
}
