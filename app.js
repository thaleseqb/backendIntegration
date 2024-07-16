import express from "express";
import bookRoute from "./routes/book.js"

const app = express();

const port = 8000;

app.use("/livro", bookRoute);

app.listen(port, () => {
    console.log(`escutando a porta ${port}`)
});

