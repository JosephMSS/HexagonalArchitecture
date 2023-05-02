import {
  ForAuthenticating,
  ForControlAuthenticating,
  ForRepoQuerying,
} from "../ports";
import { AuthenticatedUser, User } from "./schemas";

export class DashboardApi implements ForAuthenticating {
  constructor(
    private readonly controlAuthenticator: ForControlAuthenticating,
    private readonly repoQuerier: ForRepoQuerying
  ) {}
  async login(email: string, password: string): Promise<AuthenticatedUser> {
    /**
     * El manejo de logica de errore es respondsabilidad del contorl plane en este caso
     */
    const authDetails = await this.controlAuthenticator.getAuthDetails(
      email,
      password
    );
    const permissions = await this.controlAuthenticator.getPermissions(
      email,
      password
    );
    const user = await this.repoQuerier.getUser(email);
    const authenticatedUser = {
      ...user,
      ...permissions,
      ...authDetails,
    };
    console.log(
      "🚀 ~ file: dashboard-api.ts:28 ~ DashboardApi ~ login ~ authenticatedUser:",
      authenticatedUser
    );
    return authenticatedUser;
  }
  async register(user: User, password: string): Promise<AuthenticatedUser> {
    const newUser = await this.repoQuerier.createUser(user, password);
    const authDetails = await this.controlAuthenticator.getAuthDetails(
      user.email,
      password
    );
    const permissions = await this.controlAuthenticator.getPermissions(
      user.email,
      password
    );
    const authenticatedUser = {
      ...newUser,
      ...authDetails,
      ...permissions,
    };
    console.log(
      "🚀 ~ file: dashboard-api.ts:49 ~ DashboardApi ~ register ~ authenticatedUser:",
      authenticatedUser
    );
    return authenticatedUser;
  }
}
