import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoutes from './routes/book.routes';

dotenv.config();

export default class App {
    public app = express();

    constructor() {
        this.app.use(express.json());

        // Routes
        this.app.get('/', (req, res) => res.send('API Running'));
        this.app.use('/api/books', bookRoutes);

        // Database
        const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/library';
        mongoose.connect(mongoUri)
            .then(() => console.log('DB Connected'))
            .catch(err => console.log(err));

        // Start
        const port = process.env.PORT || 3000;
        this.app.listen(port, () => console.log(`Server on ${port}`));
    }
}
