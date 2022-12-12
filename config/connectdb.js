const mongoose = require ('mongoose')

const connecter = async()=>{
    try{
    await mongoose.connect("mongodb+srv://sbica:NaSfI8w74JjXWLNF@cluster0.tqpkqlh.mongodb.net/?retryWrites=true&w=majority")
    console.log("connection à la base de donné avec succes")
    }catch(err){
    console.log('err')
}
}
module.exports = connecter ;