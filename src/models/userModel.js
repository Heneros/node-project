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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserService = exports.updateUserService = exports.createUserService = exports.getUserByIdService = exports.getAllUsersService = void 0;
const database_1 = __importDefault(require("../database/database"));
const getAllUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield database_1.default.query("SELECT * FROM users");
    return result.rows;
});
exports.getAllUsersService = getAllUsersService;
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield database_1.default.query("SELECT * FROM users WHERE id = $i", [id]);
    return result.rows[0];
});
exports.getUserByIdService = getUserByIdService;
const createUserService = (name, email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield database_1.default.query("INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *", [name, email]);
    return result.rows[0];
});
exports.createUserService = createUserService;
const updateUserService = (id, name, email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield database_1.default.query("UPDATE users SET name=$i, email=$2 WHERE id=$3 RETURNING *", [name, email, id]);
    return result.rows[0];
});
exports.updateUserService = updateUserService;
const deleteUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield database_1.default.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
});
exports.deleteUserService = deleteUserService;
