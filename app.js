import express from "express";
import bookRoute from "./routes/book.js"

const app = express();

const port = 8000;

app.use("/livros", bookRoute);

app.listen(port, () => {
    console.log(`escutando a porta ${port}`)
});

