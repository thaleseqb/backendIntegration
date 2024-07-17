import fs from "fs";

function getAllBooks() {
    return JSON.parse(fs.readFileSync("book.json"));
}

export { getAllBooks };