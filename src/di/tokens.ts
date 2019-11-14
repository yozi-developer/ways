import { Token, TokenType } from "inversify-token";
import { App } from "../App/types";

const AppToken = new Token<App>(Symbol("App"));
type AppToken = TokenType<typeof AppToken>;
