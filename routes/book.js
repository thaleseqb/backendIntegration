import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    try {
        res.send("hello world");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
});

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