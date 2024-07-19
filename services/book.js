import fs from "fs";

function getAllBooks() {
    return JSON.parse(fs.readFileSync("book.json"));
}

function getBookById(id) {
    const books = getAllBooks();

    const filteredBooks = books.filter(book => {
        return Number(book.id) === id; 
    });
    const [book] = filteredBooks

    return book;
}

export { getAllBooks, getBookById };