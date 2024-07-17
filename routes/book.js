import { Router } from "express";
import { getBooks } from "../controllers/book.js";

const router = Router();

router.get("/", getBooks);

router.post("/", (req, res) => {
    res.send("você fez uma requisão do tipo POST")
});

router.patch("/", (req, res) => {
    res.send("você fez uma requisão do tipo PATCH")
});

router.delete("/", (req, res) => {
    res.send("você fez uma requisão do tipo DELETE")
});

export default router;