"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const book_routes_1 = __importDefault(require("./routes/book.routes"));
dotenv_1.default.config();
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || 3000;
        this.setup();
        this.routes();
        this.db();
        this.listen();
    }
    setup() {
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.get('/', (req, res) => res.send('Library API is live'));
        this.app.use('/api/books', book_routes_1.default);
    }
    async db() {
        try {
            const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/library';
            await mongoose_1.default.connect(uri);
            console.log('Connected to DB');
        }
        catch (err) {
            console.error('DB error:', err);
        }
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Live on port ${this.port}`);
        });
    }
}
exports.default = App;
