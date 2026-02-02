import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoutes from './routes/book.routes';

dotenv.config();

export default class App {
    app = express();

    constructor() {
        this.app.use(express.json());

        this.app.get('/', (req, res) => res.send('API is live'));
        this.app.use('/api/books', bookRoutes);

        const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/library';
        mongoose.connect(uri).then(() => console.log('Connected to DB'));

        const port = process.env.PORT || 3000;
        this.app.listen(port, () => console.log(`Server on port ${port}`));
    }
}
