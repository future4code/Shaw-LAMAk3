import { CustomError } from "../errors/CustomError";

export class Band {
   constructor(
      private id: string,
      private name: string,
      private music_genre: string,
      private responsible: string,
      private role: USER_ROLES
   ) { }

   public getId(): string {
      return this.id;
   }

   public getName(): string {
      return this.name;
   }

   public getMusicGenre(): string {
      return this.music_genre;
   }

   public getResponsible(): string {
      return this.responsible;
   }

   public getRole(): USER_ROLES {
      return this.role;
   }
}

export const stringToUserRole = (input: string): USER_ROLES => {
   switch (input) {
      case "NORMAL":
         return USER_ROLES.NORMAL;
      case "ADMIN":
         return USER_ROLES.ADMIN;
      default:
         throw new CustomError(422, "Invalid user role");
   }
};

export enum USER_ROLES {
   NORMAL = "NORMAL",
   ADMIN = "ADMIN",
}

