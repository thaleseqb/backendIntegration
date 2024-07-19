import fs from "fs";

function getAllBooks() {
    return JSON.parse(fs.readFileSync("book.json"));
}

function getBookById(id) {
    const books = getAllBooks();

    const filteredBooks = books.filter(book => {
        return Number(book.id) === Number(id); 
    });
    const [book] = filteredBooks

    return book;
}

function addBook(body) {
    const books = getAllBooks();
    fs.writeFileSync("book.json", JSON.stringify([...books, body]));
}

function patchBook(modfications, id) {
    let books = getAllBooks();
    
    const modfiedIndex = books.findIndex(book => {
        return Number(book.id) === Number(id);
    });

    const modfiedContent = {...books[modfiedIndex], ...modfications};

    books[modfiedIndex] = modfiedContent;

    fs.writeFileSync("book.json", JSON.stringify(books));

}

function deleteBook(id) {
    const books = getAllBooks();

    const bookIndex = books.findIndex(book => {
        return Number(book.id) === Number(id);
    });

    books.splice(bookIndex, 1);
    fs.writeFileSync("book.json", JSON.stringify(books));
}

export { getAllBooks, getBookById, addBook, patchBook, deleteBook };