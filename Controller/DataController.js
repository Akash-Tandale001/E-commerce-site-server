const Product = require("../Model/Products");
const User = require("../Model/User")
const Cart = require("../Model/CartItem")
const Faourites = require("../Model/FaouritesItem")
const jwt = require("jsonwebtoken");

exports.getProductByKeywords = async (req, res) => {
  try {
    // let token = req.headers.authentication;
    // const verifytoken = jwt.verify(token, process.env.REACT_APP_JWT_SECRETKEY);
    // if (!verifytoken)
    //   return res.status(401).json({ error: "Unauthorized request" });
    const products = await Product.find({ keyword: req.query.keyword });
    res.json({
      status: "success",
      data: {
        data: products,
      },
    });
  } catch (err) {
    res.status(400).json({ status: "error", error: err.message });
  }
};

exports.addProduct = async (req, res) => {
  try {
    let token = req.headers.authentication;
    const verifytoken = jwt.verify(token, process.env.REACT_APP_JWT_SECRETKEY);
    if (!verifytoken)
      return res.status(401).json({ error: "Unauthorized request" });
    await Product.create({
      name: req.body.name,
      price: req.body.price,
      imageurl: req.body.imageurl,
      keyword: req.body.keyword,
    });
    res.json({
      status: "success",
    });
  } catch (err) {
    res.status(400).json({ status: "error", error: err.message });
  }
};
exports.updateProduct = async (req, res) => {
  /**
   * under work
   */
  try {
    let token = req.headers.authentication;
    const verifytoken = jwt.verify(token, process.env.REACT_APP_JWT_SECRETKEY);
    if (!verifytoken)
      return res.status(401).json({ error: "Unauthorized request" });

    const product = await Product.findOne({ id: req.body.id });
    if (!product) {
      res
        .status(401)
        .json({ status: "error", message: "No such Product is present" });
    }
    await Product.updateOne({
      name: req.body.name,
      price: req.body.price,
      imageurl: req.body.imageurl,
    });
    res.json({
        status: "success",
      });
  } catch (err) {
    res.status(400).json({ status: "error", error: err.message });
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    let token = req.headers.authentication;
    const verifytoken = jwt.verify(token, process.env.REACT_APP_JWT_SECRETKEY);
    if (!verifytoken)
      return res.status(401).json({ error: "Unauthorized request" });

    const product = await Product.findOne({ id: req.query.id });
    if (!product) {
      res
        .status(401)
        .json({ status: "error", message: "No such Product is present" });
    }
    await User.deleteOne({ id: req.body.id });
    res.json({
        status: "success",
      });
  } catch (err) {
    res.status(400).json({ status: "error", error: err.message });
  }
};

exports.searchEmail = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.query.email });
      if (!product) {
        res.json({
            status: "fail",
          });
      }
      res.json({
        status: "success",
      });
    } catch (err) {
      res.status(400).json({ status: "error", error: err.message });
    }
  };
  exports.searchUsername = async (req, res) => {
    try {
      const user = await User.findOne({ userName: req.query.username });
      if (!product) {
        res.json({
            status: "fail",
          });
      }
      res.json({
        status: "success",
      });
    } catch (err) {
      res.status(400).json({ status: "error", error: err.message });
    }
  };


  exports.addToCart=async(req,res)=>{
    try {
        let token = req.headers.authentication;
        const verifytoken = jwt.verify(token, process.env.REACT_APP_JWT_SECRETKEY);
        if (!verifytoken)
          return res.status(401).json({ error: "Unauthorized request" });
        const user = await User.findOne({email}).select("+password");
       
          if(user){
            await Cart.create({
                name: req.body.name,
                price: req.body.price,
                imageurl: req.body.imageUrl,
                user: user.__id,
              });
              res.json({
                status: "success",
              });
          }
        res.json({
          status: "success",
        });
      } catch (err) {
        res.status(400).json({ status: "error", error: err.message });
      }
  }
  exports.addToFaourites=async(req,res)=>{
    try {
        let token = req.headers.authentication;
        const {email}=req.body;
        const verifytoken = jwt.verify(token, process.env.REACT_APP_JWT_SECRETKEY);
        if (!verifytoken)
          {return res.status(401).json({ error: "Unauthorized request" });}

        const user = await User.findOne({email}).select("+password");
       
          if(user){
            await Faourites.create({
                name: req.body.name,
                price: req.body.price,
                imageurl: req.body.imageUrl,
                user: user.__id,
              });
              res.json({
                status: "success",
              });
          }
          
        
      } catch (err) {
        res.status(400).json({ status: "error", error: err.message });
      }
  }

  exports.getToCart=async(req,res)=>{
    try {
        let token = req.headers.authentication;
        const verifytoken = jwt.verify(token, process.env.REACT_APP_JWT_SECRETKEY);
        if (!verifytoken)
          {return res.status(401).json({ error: "Unauthorized request" });}
        
        
        const user = User.findOne({email: req.body.email}).populate('cart');
        
        res.json({
          status: "success",
          data: user
        });
      } catch (err) {
        res.status(400).json({ status: "error", error: err.message });
      }
  }
  exports.getToFaourites=async(req,res)=>{
    try {
        let token = req.headers.authentication;
        const verifytoken = jwt.verify(token, process.env.REACT_APP_JWT_SECRETKEY);
        if (!verifytoken)
          {return res.status(401).json({ error: "Unauthorized request" });}

        const user = await User.findOne({email: req.body.email}).populate('favouritesItem')
        console.log(user.favouritesItem);
        res.json({
          status: "success",
          data: user.favouritesItem
        });
      } catch (err) {
        res.status(400).json({ status: "error", error: err.message });
      }
  }
  
