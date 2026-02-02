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
            const data = await this.service.getBooks();
            res.json(data);
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async getOne(req, res) {
        try {
            const data = await this.service.getBook(req.params.id);
            data ? res.json(data) : res.status(404).send('Not found');
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async create(req, res) {
        try {
            const data = await this.service.addBook(req.body);
            res.status(201).json(data);
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async update(req, res) {
        try {
            const data = await this.service.updateBook(req.params.id, req.body);
            data ? res.json(data) : res.status(404).send('Not found');
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async remove(req, res) {
        try {
            const data = await this.service.removeBook(req.params.id);
            data ? res.send('Deleted') : res.status(404).send('Not found');
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}
exports.default = BookController;
