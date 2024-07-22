import { getAllBooks } from "../services/book.js";
import { favName } from "../fileNames.js";

function getAllFav(req, res) {
    try {
        const allFav = getAllBooks(favName);
        res.status(200);
        res.send(allFav);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export { getAllFav };