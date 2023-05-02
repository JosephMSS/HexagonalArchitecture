import { AuthenticatedUser, DashboardApi, User } from "../../app/";
import { ForAuthenticating } from "../../ports";
/**
 * El proxy no hace nada mas que controlar los datos de entrada
 */
export class AuthenticatorProxyAdapter implements ForAuthenticating {
  /**
   * Estp es el adapter para obtner parametro expterno y utilizarlos en al hexagono
   */
  constructor(private readonly dashboardApi: DashboardApi) {}
  async login(email: string, password: string): Promise<AuthenticatedUser> {
    return await this.dashboardApi.login(email, password);
  }
  async register(user: User, password: string): Promise<AuthenticatedUser> {
    return await this.dashboardApi.register(user, password);
  }
}
