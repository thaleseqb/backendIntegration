import fs from "fs";
import {bookName} from "../fileNames.js";

function getAllBooks(fileName) {
    return JSON.parse(fs.readFileSync(fileName));
}

function getBookById(id) {
    const books = getAllBooks(bookName);

    const filteredBooks = books.filter(book => {
        return Number(book.id) === Number(id); 
    });
    const [book] = filteredBooks

    return book;
}

function addBook(body) {
    const books = getAllBooks(bookName);
    fs.writeFileSync(bookName, JSON.stringify([...books, body]));
}

function patchBook(modfications, id) {
    let books = getAllBooks(bookName);
    
    const modfiedIndex = books.findIndex(book => {
        return Number(book.id) === Number(id);
    });

    const modfiedContent = {...books[modfiedIndex], ...modfications};

    books[modfiedIndex] = modfiedContent;

    fs.writeFileSync(bookName, JSON.stringify(books));

}

function deleteBook(id) {
    const books = getAllBooks(bookName);

    const bookIndex = books.findIndex(book => {
        return Number(book.id) === Number(id);
    });

    books.splice(bookIndex, 1);
    fs.writeFileSync(bookName, JSON.stringify(books));
}

export { getAllBooks, getBookById, addBook, patchBook, deleteBook };