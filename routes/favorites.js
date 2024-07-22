import { Router } from "express";
import { getAllFav, postFav, deleteFavById } from "../controllers/favorites.js"; 

const router = Router();

router.get("/", getAllFav);

router.post("/:id", postFav);

router.delete("/:id", deleteFavById);

export default router;