import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoutes from './routes/book.routes';

dotenv.config();

export default class App {
    public app = express();
    public port = process.env.PORT || 3000;

    constructor() {
        this.setup();
        this.routes();
        this.db();
        this.listen();
    }

    private setup() {
        this.app.use(express.json());
    }

    private routes() {
        this.app.get('/', (req, res) => res.send('Library API is live'));
        this.app.use('/api/books', bookRoutes);
    }

    private async db() {
        try {
            const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/library';
            await mongoose.connect(uri);
            console.log('Connected to DB');
        } catch (err) {
            console.error('DB error:', err);
        }
    }

    private listen() {
        this.app.listen(this.port, () => {
            console.log(`Live on port ${this.port}`);
        });
    }
}
