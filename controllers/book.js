import { getAllBooks, getBookById } from "../services/book.js";

function getBooks(req, res) {
    try {
        const books = getAllBooks();
        res.send(books);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function getById(req, res) {
    try {
        const id = req.params.id;
        const book = getBookById(Number(id));
        res.send(book);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export { getBooks, getById };