import { getAllBooks } from "../services/book.js";
import { favName } from "../fileNames.js";
import { addFav, deleteFav } from "../services/favorites.js";

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

function postFav(req, res) {
    try {
        addFav(req.params.id);
        res.status(201);
        res.send("Livro inserido com sucesso");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function deleteFavById(req, res) {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            deleteFav(id);
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

export { getAllFav, postFav, deleteFavById };