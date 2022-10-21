const mongoose = require('mongoose')

const faouritesItemSchema = new mongoose.Schema({
    name:{
        type:String, required:[true ,"Please provide a Product Name"]
    }, 
    price:{
        type:String, required:[true ,"Please provide a Price"]
    },
    imageurl:{
        type:String, required:[true ,"Please provide a ImageURL"]
    },
    user:{type: mongoose.Schema.Types.ObjectId , ref: "User"}
})


const model = mongoose.model("FaouritesItem", faouritesItemSchema);

module.exports = model;

