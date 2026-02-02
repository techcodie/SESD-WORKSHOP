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
        this.app.use(express_1.default.json());
        // Routes
        this.app.get('/', (req, res) => res.send('API Running'));
        this.app.use('/api/books', book_routes_1.default);
        // Database
        const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/library';
        mongoose_1.default.connect(mongoUri)
            .then(() => console.log('DB Connected'))
            .catch(err => console.log(err));
        // Start
        const port = process.env.PORT || 3000;
        this.app.listen(port, () => console.log(`Server on ${port}`));
    }
}
exports.default = App;
