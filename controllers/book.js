import { addBook, deleteBook, getAllBooks, getBookById, patchBook } from "../services/book.js";
import {bookName} from "../fileNames.js"

function getBooks(req, res) {
    try {
        const books = getAllBooks(bookName);
        res.send(books);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function getById(req, res) {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            const book = getBookById(id);
            res.send(book);
        } else {
            res.status(422);
            res.send("id inválido");
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function postBook(req, res) {
    try {
        if (req.body.id && req.body.nome) {
            addBook(req.body);
            res.status(201);
            res.send("Livro inserido com sucesso");
        } else {
            res.status(422);
            res.send("Os campos id e nome são obrigatórios");
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function patchBookById(req, res) {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            patchBook(req.body, id);
            res.status(200);
            res.send("alterações concluídas");
        } else {
            res.status(422);
            res.send("id inválido")
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function deleteBookById(req, res) {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            deleteBook(id);
            res.status(200);
            res.send("exclusão concluída com sucesso");
        } else {
            res.status(422);
            res.send("id inválido");
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);        
    }
}

export { getBooks, getById, postBook, patchBookById, deleteBookById };