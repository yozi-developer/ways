import { ContainerModule } from "inversify";
import { ApiServiceToken } from "./tokens";
import ApiService from "../services/Api";
import { tokenBinder } from "inversify-token";

export const services = new ContainerModule(bind => {
  const bindToken = tokenBinder(bind);
  bindToken(ApiServiceToken).to(ApiService);
});
