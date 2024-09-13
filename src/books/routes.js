const {Router} = require("express");
const bookRouter = Router();

const {addbook, getAllBooks} = require("./controllers")



bookRouter.post("/books/addbook", addbook);
bookRouter.get("/books/getallbooks", getAllBooks);

module.exports= bookRouter;
