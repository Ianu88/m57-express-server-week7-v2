const {Router} = require("express");
const bookRouter = Router();

const {addbook, getAllBooks, deletebookbytitle } = require("./controllers")



bookRouter.post("/books/addbook", addbook);
bookRouter.get("/books/getallbooks", getAllBooks);
bookRouter.delete("books/deletebookbytitle", deletebookbytitle)
module.exports= bookRouter;
