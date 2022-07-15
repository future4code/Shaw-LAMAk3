"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenGeneratorMocks = void 0;
const User_1 = require("../../src/model/User");
class TokenGeneratorMocks {
    constructor() {
        this.generate = () => {
            return "TOKEN_QUALQUER";
        };
    }
    verify() {
        const objeto = {
            id: "id_mock",
            role: User_1.USER_ROLES.ADMIN
        };
        return objeto;
    }
}
exports.TokenGeneratorMocks = TokenGeneratorMocks;
