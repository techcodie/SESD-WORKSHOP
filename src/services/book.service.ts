import BookRepository from '../repositories/book.repository';
import { IBook } from '../schema/book.schema';

export default class BookService {
    private repo = new BookRepository();

    async getBooks() {
        return await this.repo.find();
    }

    async getBook(id: string) {
        return await this.repo.findById(id);
    }

    async addBook(data: any) {
        return await this.repo.create(data);
    }

    async updateBook(id: string, data: any) {
        return await this.repo.update(id, data);
    }

    async removeBook(id: string) {
        return await this.repo.delete(id);
    }
}
