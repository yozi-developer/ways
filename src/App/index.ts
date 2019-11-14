import { App } from "./types";
import { injectToken } from "inversify-token";
import { ApiService } from "../di/tokens";
import { injectable } from "inversify";

@injectable()
export default class AppImpl implements App {
  constructor(@injectToken(ApiService) private apiService: ApiService) {}
  private getCredentials(): { login: string; password: string } {
    return {
      login: "Скупой сосед",
      password: "AvatarPar5!"
    };
  }
  public signIn(): void {
    const credentials = this.getCredentials();
    this.apiService.login(credentials.login, credentials.password);
  }
}
