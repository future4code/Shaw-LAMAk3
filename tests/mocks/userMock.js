"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMocks2 = exports.userMocks = void 0;
const User_1 = require("../../src/model/User");
exports.userMocks = new User_1.User("id_mock1", "mock1", "mock1@gmail.com", "mocks123", User_1.USER_ROLES.ADMIN);
exports.userMocks2 = new User_1.User("id_mock2", "mock2", "mock2@gmail.com", "mocks123", User_1.USER_ROLES.NORMAL);
