"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_schema_1 = __importDefault(require("../schema/book.schema"));
class BookRepository {
    constructor() {
        this.find = () => book_schema_1.default.find();
        this.findById = (id) => book_schema_1.default.findById(id);
        this.create = (data) => book_schema_1.default.create(data);
        this.update = (id, data) => book_schema_1.default.findByIdAndUpdate(id, data, { new: true });
        this.delete = (id) => book_schema_1.default.findByIdAndDelete(id);
    }
}
exports.default = BookRepository;
