const mongoose = require('mongoose')

const cartItemSchema = new mongoose.Schema({
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


const model = mongoose.model("CartItem", cartItemSchema);

module.exports = model;

