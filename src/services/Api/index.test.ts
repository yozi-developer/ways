import container from "../../di";
import { ApiServiceToken } from "../../di/tokens";
import { getToken } from "inversify-token";

// TODO: make it acceptance tests: make it runnable manually only
describe("login", () => {
  let api: ApiServiceToken;
  beforeEach(() => {
    api = getToken(container, ApiServiceToken);
  });
  it("should return session key", async () => {
    const login = "Скупой сосед";
    const password = "AvatarPar5!";
    const { session } = await api.login(login, password).toPromise();

    expect(typeof session).toBe("string");
  });
});
