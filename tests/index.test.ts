import { UserBusiness } from "../src/business/UserBusiness"
import { HashGeneratorMocks } from "./mocks/hashGeneratorMocks"
import { IdGeneratorMocks } from "./mocks/idGeneratorMocks"
import { TokenGeneratorMocks } from "./mocks/tokenGeneratorMocks"
import { UserDatabaseMocks } from "./mocks/UserDatabaseMocks"

const userBussinesMock = new UserBusiness(
    new IdGeneratorMocks,
    new HashGeneratorMocks as any,
    new UserDatabaseMocks as any,
    new TokenGeneratorMocks
);

// TDD


describe("teste de signUp", () => {

    test("Erro quando retornar nome vazio", async () => {
        expect.assertions(1)
        try {
            await userBussinesMock.signup("", "fulano@gmail.com", "senha123", "NORMAL");
        } catch (error:any) {
            expect(error.message).toBe("Missing input")
        }
    })

    test("Erro quando o email for inválido", async () => {
        expect.assertions(1)
        try {
            await userBussinesMock.signup("fulano", "fulanogmail.com", "senha123", "NORMAL");
        } catch (error:any) {
            expect(error.message).toBe("Invalid email")
        }
    })

    test("Erro quando a senha for inválida", async () => {
        expect.assertions(1)
        try {
            await userBussinesMock.signup("fulano", "fulano@gmail.com", "123", "NORMAL");
        } catch (error:any) {
            expect(error.message).toBe("Invalid password")
        }
    })

    test("Erro quando o usuario for inválido", async () => {
        expect.assertions(1)
        try {
            await userBussinesMock.signup("fulano", "fulano@gmail.com", "senha123", "Diferente");
        } catch (error:any) {
            expect(error.message).toBe("Invalid user role")
        }
    })

    test("Caso de sucesso", async () => {
        expect.assertions(1)
        try {
            const token = await userBussinesMock.signup("fulano", "fulano@gmail.com", "senha123", "NORMAL");
            expect(token).toBe("TOKEN_QUALQUER")
        } catch (error) {

        }
    })

})

describe("teste de login", () => {

    test("Erro quando o email não existir", async () => {
        expect.assertions(1)
        try {
            await userBussinesMock.login("email@email.com", "mocks123")
        } catch (error) {
            expect(error.message).toBe("Invalid credentials")
        }
    })

    test("Erro quando a senha estiver errada", async () => {
        expect.assertions(1)
        try {
            await userBussinesMock.login("mock1@gmail.com", "senha12342198421iub")
        } catch (error) {
            expect(error.message).toBe("Invalid credentials")
        }
    })

    test("Caso de sucesso",async()=>{
        try {
            const token = await userBussinesMock.login("mock1@gmail.com","mocks123") 
            expect(token).toBe("TOKEN_QUALQUER")
        } catch (error) {
            console.log(error);
        }
    })

})

