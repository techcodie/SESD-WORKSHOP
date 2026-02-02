import Book from '../schema/book.schema';

export default class BookRepository {
    async find() {
        return await Book.find();
    }

    async findById(id: string) {
        return await Book.findById(id);
    }

    async create(data: any) {
        return await Book.create(data);
    }

    async update(id: string, data: any) {
        return await Book.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string) {
        return await Book.findByIdAndDelete(id);
    }
}
