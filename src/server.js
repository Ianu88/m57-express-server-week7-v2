require("dotenv").config();
const express = require(`express`);
const mongoose= require("mongoose");

console.log(process.env.MY_WORD);

const app = express();

const fakedb =[]
app.listen(5000,()=> console.log ("server is listening on port 5000"))
app.use(express.json());

const connection= async () =>{
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB is working");
};

connection();

// book model
const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true,
    },
    author:{
        type: String,
        required: true,

    },
    genre:{
        type: String,
        
    },
});

const Book = mongoose.model("book", bookSchema);

app.post("/books/addbook", async(request, response)=>{
    console.log("request.body", request.body.genre);    
    const book = await Book.create({
            title: request.body.title,
            author: request.body.author,
            genre: request.body.genre,
        });
        response.send({ message: "success", book: book });

        
})
app.get("/books/getallbooks", async(request, response) =>{
const books = await Book.find({});
response.send ({message: "success", books: books})
})

    
app.get("/books", (request, response) => {
    const Book= {
        title:`Eye of the world`,
        author:`Robert Jordan`,
        genre:`epic fantasy`,
    };
    response.send({message:"success", book:book})

});

app.get("/books/allbooks", (request, response) => {
response.send({message:"success", book:book})
});

app.post("/books/addbook", (request, response) =>{
fakedb.push(request.body);

    response.send ({message:`${request.body.title} has been added`});
}
)
app.post("/movies/onemovie", (request, response) =>{
    fakedb.push(request.body);
    
        response.send ("One Movie");
app.listen(5000,() => {
console.log("server is listening on port 5000");
});
}
)
// delete one book by title
app.delete ("/books/deletebookbytitle", async(request, response) => {
    try {
        const books = await Book.deleteOne({
        Title: "Eye of the world"            
        });
        response.send({ message:  "success", allbooks: books });
        } catch (error) {
        console.log(error)
        }
    });

    app.put("/books/updatebookauthor", async(request, response) =>{
        // code here
        // 1. filter object (filter by title)
        // 2. update object (author)
    })
