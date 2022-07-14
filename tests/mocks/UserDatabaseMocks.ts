import { User } from "../../src/model/User";
import { userMocks, userMocks2 } from "./userMock";

export class UserDatabaseMocks {


   public async createUser(user: User): Promise<void> {}

   public async getUserByEmail(email: string): Promise<User | undefined> {
      switch(email){
         case "mock1@gmail.com":
            return userMocks
         case "mock2@gmail.com":
            return userMocks2
         default:
            undefined
      }
   }

   public async getUserById(id: string): Promise<User | undefined> {
      return userMocks
   }

   public async getAllUsers(): Promise<User[]> {
      return [userMocks,userMocks2]
   }
}
