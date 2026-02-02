"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_service_1 = __importDefault(require("../services/book.service"));
class BookController {
    constructor() {
        this.service = new book_service_1.default();
    }
    async getAll(req, res) {
        try {
            const books = await this.service.getBooks();
            res.status(200).json(books);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async getOne(req, res) {
        try {
            const book = await this.service.getBook(req.params.id);
            if (!book) {
                return res.status(404).json({ message: "Book not found" });
            }
            res.status(200).json(book);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async create(req, res) {
        try {
            const book = await this.service.addBook(req.body);
            res.status(201).json(book);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async update(req, res) {
        try {
            const book = await this.service.updateBook(req.params.id, req.body);
            if (!book) {
                return res.status(404).json({ message: "Book not found" });
            }
            res.status(200).json(book);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async remove(req, res) {
        try {
            const book = await this.service.removeBook(req.params.id);
            if (!book) {
                return res.status(404).json({ message: "Book not found" });
            }
            res.status(200).json({ message: "Book deleted" });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
exports.default = BookController;
