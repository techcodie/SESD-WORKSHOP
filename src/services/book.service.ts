import BookRepository from '../repositories/book.repository';

export default class BookService {
    repo = new BookRepository();

    getBooks = () => this.repo.find();
    getBook = (id: string) => this.repo.findById(id);
    addBook = (data: any) => this.repo.create(data);
    updateBook = (id: string, data: any) => this.repo.update(id, data);
    removeBook = (id: string) => this.repo.delete(id);
}
