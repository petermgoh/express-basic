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

// Every thrown error in the application or the previous middleware 
// function calling `next` with an error as an argument will eventually 
// go to this middleware function
app.use((err, req, res, next) => {
    console.error(err);
    // We can now specify the `err.statusCode` that exists in our custom error class and if it does not exist it's probably an internal server error
    res.status(err.statusCode || 500).send(err.message);
});
  