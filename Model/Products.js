const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');

const ProductsSchema = new mongoose.Schema({
    id:{
        type:String
    }, 
    name:{
        type:String, required:[true ,"Please provide a Product Name"]
    }, 
    price:{
        type:String, required:[true ,"Please provide a Price"]
    },
    imageurl:{
        type:String, required:[true ,"Please provide a ImageURL"]
    }, 
    keyword: {
        type:String, required:[true ,"Please provide a keyword"]
    },
    dateCreated: {
        type:String,
    }
})
ProductsSchema.pre("save",async function(next){
    this.id = uuidv4();
    this.dateCreated = new Date();
    next();
})
const model = mongoose.model("Products", ProductsSchema);

module.exports = model;