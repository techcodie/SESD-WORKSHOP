import { Request, Response } from 'express';
import BookService from '../services/book.service';

export default class BookController {
    private service = new BookService();

    async getAll(req: Request, res: Response) {
        try {
            const data = await this.service.getAll();
            res.json(data);
        } catch (err: any) {
            res.status(500).json({ error: err.message });
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const data = await this.service.getOne(req.params.id);
            data ? res.json(data) : res.status(404).send('Not found');
        } catch (err: any) {
            res.status(500).json({ error: err.message });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const data = await this.service.add(req.body);
            res.status(201).json(data);
        } catch (err: any) {
            res.status(500).json({ error: err.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const data = await this.service.update(req.params.id, req.body);
            data ? res.json(data) : res.status(404).send('Not found');
        } catch (err: any) {
            res.status(500).json({ error: err.message });
        }
    }

    async remove(req: Request, res: Response) {
        try {
            const data = await this.service.remove(req.params.id);
            data ? res.send('Deleted') : res.status(404).send('Not found');
        } catch (err: any) {
            res.status(500).json({ error: err.message });
        }
    }
}
