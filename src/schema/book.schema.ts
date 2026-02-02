import mongoose, { Schema, Document } from 'mongoose';

export interface IBook extends Document {
    title: string;
    author: string;
    isbn: string;
    year: number;
    available: boolean;
}

const BookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, required: true, unique: true },
    year: { type: Number },
    available: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model<IBook>('Book', BookSchema);
