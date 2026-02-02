"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const book_controller_1 = __importDefault(require("../controllers/book.controller"));
const router = (0, express_1.Router)();
const book = new book_controller_1.default();
router.get('/', book.getAll);
router.get('/:id', book.getOne);
router.post('/', book.create);
router.put('/:id', book.update);
router.delete('/:id', book.remove);
exports.default = router;
