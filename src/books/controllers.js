const Book = require ("./model")

const addbook= async(request, response)=>{
    console.log("request.body", request.body.genre);    
    const book = await Book.create({
            title: request.body.title,
            author: request.body.author,
            genre: request.body.genre,
        })
        response.send({ message: "success", book: book });     
};
const getAllBooks = async(request, response) =>{
    const books = await Book.find({});
    response.send ({message: "success", books: books})
}
const deletebookbytitle = async(request, response) => {
    try {
        const books = await Book.deleteOne({
        title: request.body.title            
        });
        response.send({ message:  "success", allbooks: books });
        } catch (error) {
        console.log(error)
        }
};

const updatebookauthor = async(request, response) =>{
    const query={title:request.body.title};
    const book = await Book.findOneAndUpdate(query,{author: request.body.author})
   response.send({message: "success", book:book})
};

module.exports= {
    addbook: addbook,
    getAllBooks: getAllBooks,
    deletebookbytitle: deletebookbytitle,
    updatebookauthor: updatebookauthor
};