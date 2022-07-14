import { USER_ROLES } from "../model/User"

export type signupInputDTO = {
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
}