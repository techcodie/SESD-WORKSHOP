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
    async getAll() {
        return await this.repo.find();
    }
    async getOne(id) {
        return await this.repo.findById(id);
    }
    async add(data) {
        return await this.repo.create(data);
    }
    async update(id, data) {
        return await this.repo.update(id, data);
    }
    async remove(id) {
        return await this.repo.delete(id);
    }
}
exports.default = BookService;
