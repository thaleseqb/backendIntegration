import { Router } from "express";
import { getBooks, getById, postBook } from "../controllers/book.js";

const router = Router();

router.get("/", getBooks);

router.get("/:id", getById);

router.post("/", postBook);

router.patch("/", (req, res) => {
    res.send("você fez uma requisão do tipo PATCH")
});

router.delete("/", (req, res) => {
    res.send("você fez uma requisão do tipo DELETE")
});

export default router;