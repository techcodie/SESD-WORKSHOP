"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_schema_1 = __importDefault(require("../schema/book.schema"));
class BookRepository {
    async find() {
        return await book_schema_1.default.find();
    }
    async findById(id) {
        return await book_schema_1.default.findById(id);
    }
    async create(data) {
        return await book_schema_1.default.create(data);
    }
    async update(id, data) {
        return await book_schema_1.default.findByIdAndUpdate(id, data, { new: true });
    }
    async delete(id) {
        return await book_schema_1.default.findByIdAndDelete(id);
    }
}
exports.default = BookRepository;
