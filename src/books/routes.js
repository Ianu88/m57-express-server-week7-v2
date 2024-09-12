const {Router} = require("express");
const bookRouter = Router();

const {addbook} = require("./controllers")

module.exports= bookRouter;
const Book =require("./model");

bookRouter.post("/books/addbook", addbook);
        