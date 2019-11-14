import "whatwg-fetch";
import "core-js/proposals/reflect-metadata";
import { Container } from "inversify";
import { services } from "./modules";
import { tokenBinder, tokenUnbinder } from "inversify-token";
import { App } from "./tokens";
import AppImpl from "../App";

const container = new Container();
export const bindToken = tokenBinder(container.bind.bind(container));
export const unbindToken = tokenUnbinder(container.unbind.bind(container));

// my  guess: different modules force developers to avoid circular dependencies
container.load(services);

bindToken(App).to(AppImpl);
export default container;
