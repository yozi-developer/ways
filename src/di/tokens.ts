import { Token, TokenType } from "inversify-token";
import { ApiService } from "../services/Api/types";

export const ApiServiceToken = new Token<ApiService>(Symbol("ApiService"));
export type ApiServiceToken = TokenType<typeof ApiServiceToken>;
