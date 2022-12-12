const mongoose = require ('mongoose')

const listSchema = mongoose.Schema({

    name:String,
    age:Number,
    email:{
        type:String,
        required :true,
        unique:true
    }


})
module.exports = mongoose.model ('Fethi',listSchema)