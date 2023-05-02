import {
  AuthenticatorProxyAdapter,
  ControlAuthenticatorStub,
  RepoQuerierStub,
} from "../adapters";
import { DashboardApi } from "./dashboard-api";
import { User } from "./schemas";

/**
 * Se encarga de crear todo en nuestra instancia par utilizarlo como mock e instancia real
 */
const compositionMock = () => {
  const controlAuthenticatorStub = new ControlAuthenticatorStub();
  const repoQuerier = new RepoQuerierStub();
  /**
   * !No voy a retornar mi hexágono directamente ya que debo emplear el proxy adapter(drivers) para acceder a el
   */
  const dashboardApi = new DashboardApi(controlAuthenticatorStub, repoQuerier);
  const authenticatorProxyAdapter = new AuthenticatorProxyAdapter(dashboardApi);
  return { authenticatorProxyAdapter };
};

export const { authenticatorProxyAdapter } = compositionMock();
authenticatorProxyAdapter.login("jos@gmail.com", "asdfaefas");
const registerMock: User = {
  email: "jos@gmail.com",
  name: "Joseph",
};
authenticatorProxyAdapter.register(registerMock, "asdfaefas");
