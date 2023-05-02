import { AuthDetails, Permissions } from "../../app";
import { ForControlAuthenticating } from "../../ports/drivens/for-control-authenticating";

const authDetailsMock: AuthDetails = {
  token: "FASDF",
  refreshToken: "ASDFAASDFASD",
};
const permissionsMock: Permissions = {
  admin: true,
  user: true,
};
export class ControlAuthenticatorStub implements ForControlAuthenticating {
  /**
   * *En caso de no usar un parámetro de  entrada se
   * *le coloca un guion bajo para que no de error
   * *de compilación
   */
  async getAuthDetails(
    _email: string,
    _password: string
  ): Promise<AuthDetails> {
    return Promise.resolve(authDetailsMock);
  }
  async getPermissions(
    _email: string,
    _password: string
  ): Promise<Permissions> {
    return Promise.resolve(permissionsMock);
  }
}
