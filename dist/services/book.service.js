"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_repository_1 = __importDefault(require("../repositories/book.repository"));
class BookService {
    constructor() {
        this.repo = new book_repository_1.default();
    }
    async getBooks() {
        return await this.repo.find();
    }
    async getBook(id) {
        return await this.repo.findById(id);
    }
    async addBook(data) {
        return await this.repo.create(data);
    }
    async updateBook(id, data) {
        return await this.repo.update(id, data);
    }
    async removeBook(id) {
        return await this.repo.delete(id);
    }
}
exports.default = BookService;
