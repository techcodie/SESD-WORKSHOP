import Book, { IBook } from '../schema/book.schema';
import BaseRepository from './base.repository';

export default class BookRepository extends BaseRepository<IBook> {
    constructor() {
        super(Book);
    }
}
