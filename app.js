const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter.js")
const bookRouter = require("./routes/bookRouter.js")
const indexRouter = require("./routes/indexRouter.js")


app.use("/author", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`My first express app - listening on port ${PORT}!`);
});