import { Router } from "express";
import { getBooks, getById, postBook, patchBookById, deleteBookById } from "../controllers/book.js";

const router = Router();

router.get("/", getBooks);

router.get("/:id", getById);

router.post("/", postBook);

router.patch("/:id", patchBookById);

router.delete("/:id", deleteBookById);

export default router;