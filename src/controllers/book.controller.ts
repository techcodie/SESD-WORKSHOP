import { Request, Response } from 'express';
import BookService from '../services/book.service';

export default class BookController {
    private service = new BookService();

    async getAll(req: Request, res: Response) {
        try {
            const books = await this.service.getBooks();
            res.status(200).json(books);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const book = await this.service.getBook(req.params.id);
            if (!book) {
                return res.status(404).json({ message: "Book not found" });
            }
            res.status(200).json(book);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const book = await this.service.addBook(req.body);
            res.status(201).json(book);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const book = await this.service.updateBook(req.params.id, req.body);
            if (!book) {
                return res.status(404).json({ message: "Book not found" });
            }
            res.status(200).json(book);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    async remove(req: Request, res: Response) {
        try {
            const book = await this.service.removeBook(req.params.id);
            if (!book) {
                return res.status(404).json({ message: "Book not found" });
            }
            res.status(200).json({ message: "Book deleted" });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}
