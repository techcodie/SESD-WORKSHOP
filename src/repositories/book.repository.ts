import Book from '../schema/book.schema';

export default class BookRepository {
    find = () => Book.find();
    findById = (id: string) => Book.findById(id);
    create = (data: any) => Book.create(data);
    update = (id: string, data: any) => Book.findByIdAndUpdate(id, data, { new: true });
    delete = (id: string) => Book.findByIdAndDelete(id);
}
