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
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const checkAuth = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let jwtToken;
    try {
        const authHeader = req.headers.authorization || req.headers.Authorization;
        if (typeof authHeader !== "string" ||
            !(authHeader === null || authHeader === void 0 ? void 0 : authHeader.startsWith("Bearer "))) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        // if (typeof authHeader === "string") {
        // }
        jwtToken = authHeader.split(" ")[1];
        if (!jwtToken) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        const decoded = jsonwebtoken_1.default.verify(jwtToken, process.env.JWT_ACCESS_SECRET_KEY);
        if (decoded && typeof decoded === "object" && "id" in decoded) {
            const userId = decoded.id;
            next();
        }
        next();
    }
    catch (error) {
        res.status(501).json({ message: "Server mistake", error });
    }
}));
exports.default = checkAuth;
