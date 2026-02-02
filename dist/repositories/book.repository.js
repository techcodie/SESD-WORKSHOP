"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_schema_1 = __importDefault(require("../schema/book.schema"));
const base_repository_1 = __importDefault(require("./base.repository"));
class BookRepository extends base_repository_1.default {
    constructor() {
        super(book_schema_1.default);
    }
}
exports.default = BookRepository;
