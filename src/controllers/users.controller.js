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
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getAllUsers = exports.createUser = void 0;
const userModel_1 = require("../models/userModel");
const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status,
        message,
        data,
    });
};
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    try {
        const newUser = yield (0, userModel_1.createUserService)(name, email);
        handleResponse(res, 201, "User created successfully", newUser);
    }
    catch (err) {
        next(err);
    }
});
exports.createUser = createUser;
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, userModel_1.getAllUsersService)();
        handleResponse(res, 200, "Users fetched successfully", users);
    }
    catch (err) {
        next(err);
    }
});
exports.getAllUsers = getAllUsers;
const getUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, userModel_1.getUserByIdService)(req.params.id);
        if (!user)
            return handleResponse(res, 404, "User not found");
        handleResponse(res, 200, "User fetched successfully", user);
    }
    catch (err) {
        next(err);
    }
});
exports.getUserById = getUserById;
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    try {
        const updatedUser = yield (0, userModel_1.updateUserService)(req.params.id, name, email);
        if (!updatedUser)
            return handleResponse(res, 404, "User not found");
        handleResponse(res, 200, "User updated successfully", updatedUser);
    }
    catch (err) {
        next(err);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedUser = yield (0, userModel_1.deleteUserService)(req.params.id);
        if (!deletedUser)
            return handleResponse(res, 404, "User not found");
        handleResponse(res, 200, "User deleted successfully", deletedUser);
    }
    catch (err) {
        next(err);
    }
});
exports.deleteUser = deleteUser;
