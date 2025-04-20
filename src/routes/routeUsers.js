"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("../controllers/users.controller");
const router = express_1.default.Router();
router.post("/user", users_controller_1.createUser);
router.get("/user", users_controller_1.getAllUsers);
router.get("/user/:id", users_controller_1.getUserById);
router.put("/user/:id", users_controller_1.updateUser);
router.delete("/user/:id", users_controller_1.deleteUser);
exports.default = router;
