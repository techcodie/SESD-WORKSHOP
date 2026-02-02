import BookRepository from '../repositories/book.repository';

export default class BookService {
    private repo = new BookRepository();

    async getAll() {
        return await this.repo.find();
    }

    async getOne(id: string) {
        return await this.repo.findById(id);
    }

    async add(data: any) {
        return await this.repo.create(data);
    }

    async update(id: string, data: any) {
        return await this.repo.update(id, data);
    }

    async remove(id: string) {
        return await this.repo.delete(id);
    }
}
