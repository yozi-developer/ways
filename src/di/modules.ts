import { ContainerModule } from "inversify";
import { tokenBinder } from "inversify-token";

export const services = new ContainerModule(bind => {
  const bindToken = tokenBinder(bind);
});
