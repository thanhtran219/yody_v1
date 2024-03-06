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
exports.getAllCategories = void 0;
const category_service_1 = __importDefault(require("../services/category.service"));
const messages_1 = require("../constants/messages");
const getAllCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield category_service_1.default.getAll();
    res.json({ status: messages_1.HTTP_MESSAGES.SUCCESS, results });
});
exports.getAllCategories = getAllCategories;
