import { User as RepoUser } from "../../../repository";
import { User } from "../../app";
import { ForRepoQuerying } from "../../ports";
const repoUserMock: RepoUser = {
  email: "user@example.com",
  id: "afofa123234",
  name: "John Doe",
};
export class RepoQuerierStub implements ForRepoQuerying {
  async createUser(_user: User, _password: string): Promise<RepoUser> {
    return Promise.resolve(repoUserMock);
  }
  async getUser(_email: string): Promise<RepoUser> {
    return Promise.resolve(repoUserMock);
  }
}
