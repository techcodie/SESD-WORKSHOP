import { Router } from 'express';
import BookController from '../controllers/book.controller';

const router = Router();
const book = new BookController();

router.get('/', book.getAll);
router.get('/:id', book.getOne);
router.post('/', book.create);
router.put('/:id', book.update);
router.delete('/:id', book.remove);

export default router;
