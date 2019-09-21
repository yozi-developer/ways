import "whatwg-fetch";
import "core-js/proposals/reflect-metadata";
import { Container } from "inversify";
import { services } from "./modules";

const container = new Container();

// different modules force developers avoid circular dependencies
container.load(services);

export default container;
