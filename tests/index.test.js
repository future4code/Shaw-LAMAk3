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
const UserBusiness_1 = require("../src/business/UserBusiness");
const hashGeneratorMocks_1 = require("./mocks/hashGeneratorMocks");
const idGeneratorMocks_1 = require("./mocks/idGeneratorMocks");
const tokenGeneratorMocks_1 = require("./mocks/tokenGeneratorMocks");
const UserDatabaseMocks_1 = require("./mocks/UserDatabaseMocks");
const userBussinesMock = new UserBusiness_1.UserBusiness(new idGeneratorMocks_1.IdGeneratorMocks, new hashGeneratorMocks_1.HashGeneratorMocks, new UserDatabaseMocks_1.UserDatabaseMocks, new tokenGeneratorMocks_1.TokenGeneratorMocks);
// TDD
describe("teste de signUp", () => {
    test("Erro quando retornar nome vazio", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(1);
        try {
            yield userBussinesMock.signup("", "fulano@gmail.com", "senha123", "NORMAL");
        }
        catch (error) {
            expect(error.message).toBe("Missing input");
        }
    }));
    test("Erro quando o email for inválido", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(1);
        try {
            yield userBussinesMock.signup("fulano", "fulanogmail.com", "senha123", "NORMAL");
        }
        catch (error) {
            expect(error.message).toBe("Invalid email");
        }
    }));
    test("Erro quando a senha for inválida", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(1);
        try {
            yield userBussinesMock.signup("fulano", "fulano@gmail.com", "123", "NORMAL");
        }
        catch (error) {
            expect(error.message).toBe("Invalid password");
        }
    }));
    test("Erro quando o usuario for inválido", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(1);
        try {
            yield userBussinesMock.signup("fulano", "fulano@gmail.com", "senha123", "Diferente");
        }
        catch (error) {
            expect(error.message).toBe("Invalid user role");
        }
    }));
    test("Caso de sucesso", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(1);
        try {
            const token = yield userBussinesMock.signup("fulano", "fulano@gmail.com", "senha123", "NORMAL");
            expect(token).toBe("TOKEN_QUALQUER");
        }
        catch (error) {
        }
    }));
});
describe("teste de login", () => {
    test("Erro quando o email não existir", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(1);
        try {
            yield userBussinesMock.login("email@email.com", "mocks123");
        }
        catch (error) {
            expect(error.message).toBe("Invalid credentials");
        }
    }));
    test("Erro quando a senha estiver errada", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(1);
        try {
            yield userBussinesMock.login("mock1@gmail.com", "senha12342198421iub");
        }
        catch (error) {
            expect(error.message).toBe("Invalid credentials");
        }
    }));
    test("Caso de sucesso", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const token = yield userBussinesMock.login("mock1@gmail.com", "mocks123");
            expect(token).toBe("TOKEN_QUALQUER");
        }
        catch (error) {
            console.log(error);
        }
    }));
});
