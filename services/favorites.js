import fs from "fs";
import { bookName, favName } from "../fileNames.js";
import { getAllBooks } from "./book.js";

function getFavById(id) {
    const books = getAllBooks(favName);

    const filteredBooks = books.filter(book => {
        return Number(book.id) === Number(id); 
    });
    const [book] = filteredBooks

    return book;
}

function addFav(id) {
    const books = getAllBooks(bookName);
    const favorites = getAllBooks(favName);

    const insertedBooks = books.find(book => {
        return Number(book.id) === Number(id);
    })

    fs.writeFileSync(favName, JSON.stringify([...favorites, insertedBooks]));
}

function deleteFav(id) {
    const books = getAllBooks(favName);

    const bookIndex = books.findIndex(book => {
        return Number(book.id) === Number(id);
    });

    books.splice(bookIndex, 1);
    fs.writeFileSync(favName, JSON.stringify(books));
}

export { getFavById, addFav, deleteFav }