"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDatabaseMocks = void 0;
const userMock_1 = require("./userMock");
class UserDatabaseMocks {
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (email) {
                case "mock1@gmail.com":
                    return userMock_1.userMocks;
                case "mock2@gmail.com":
                    return userMock_1.userMocks2;
                default:
                    undefined;
            }
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return userMock_1.userMocks;
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return [userMock_1.userMocks, userMock_1.userMocks2];
        });
    }
}
exports.UserDatabaseMocks = UserDatabaseMocks;
