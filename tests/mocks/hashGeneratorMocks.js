"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashGeneratorMocks = void 0;
class HashGeneratorMocks {
    constructor() {
        this.hash = (s) => {
            return "senha_Hasheada";
        };
        this.compareHash = (s, hash) => {
            return s === hash;
        };
    }
}
exports.HashGeneratorMocks = HashGeneratorMocks;
