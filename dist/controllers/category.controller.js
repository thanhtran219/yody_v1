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
const httpStatus_1 = __importDefault(require("../constants/httpStatus"));
const getAllCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield category_service_1.default.getAll();
        if (results) {
            res.json({ message: messages_1.HTTP_MESSAGES.SUCCESS, results });
        }
        else {
            res.status(httpStatus_1.default.OK).json({ message: messages_1.HTTP_MESSAGES.NOT_FOUND, results });
        }
    }
    catch (error) {
        console.error(error);
        res.status(httpStatus_1.default.INTERNAL_SERVER_ERROR).json({ error: messages_1.HTTP_MESSAGES.INTERNAL_SERVER_ERROR });
    }
});
exports.getAllCategories = getAllCategories;
