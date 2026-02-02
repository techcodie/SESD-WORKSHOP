"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_repository_1 = __importDefault(require("../repositories/book.repository"));
class BookService {
    constructor() {
        this.repo = new book_repository_1.default();
        this.getBooks = () => this.repo.find();
        this.getBook = (id) => this.repo.findById(id);
        this.addBook = (data) => this.repo.create(data);
        this.updateBook = (id, data) => this.repo.update(id, data);
        this.removeBook = (id) => this.repo.delete(id);
    }
}
exports.default = BookService;
