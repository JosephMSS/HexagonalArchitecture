import { User as RepoUser } from "../../../repository";
import { User } from "../../app";

/**
 * En general no se debe utilizar otros tipos que no pertenecen a mi hexágono,
 * pero si es en el caso de un adapter este si lo puede utilizar
 */
export interface ForRepoQuerying {
  getUser(email: string): Promise<RepoUser>;
  createUser(user: User, password: string): Promise<RepoUser>;
}
