require("dotenv").config();
const express = require(`express`);
const mongoose= require("mongoose");
const bookRouter = require("./books/routes")
const Book = require ("./books/model");
const connection = require("./db/connection");

console.log(process.env.MY_WORD);

const app = express();

app.use(express.json());
connection();

app.use(bookRouter);

// delete one book by title
app.delete ("/books/deletebookbytitle", async(request, response) => {
    try {
        const books = await Book.deleteOne({
        title: request.body.title            
        });
        response.send({ message:  "success", allbooks: books });
        } catch (error) {
        console.log(error)
        }
    });
    app.put("/books/updatebookauthor", async(request, response) =>{
        const query={title:request.body.title};
        const book = await Book.findOneAndUpdate(query,{author: request.body.author})
       response.send({message: "success", book:book})
    })
    app.listen(5000,()=> console.log ("server is listening on port 5000"))
    