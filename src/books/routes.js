const {Router} = require("express");
const bookRouter = Router();

const {addbook, getAllBooks, deletebookbytitle, updatebookauthor } = require("./controllers")



bookRouter.post("/books/addbook", addbook);
bookRouter.get("/books/getallbooks", getAllBooks);
bookRouter.delete("books/deletebookbytitle", deletebookbytitle)
bookRouter.put("books/updatebookauthor", updatebookauthor)
module.exports= bookRouter;
