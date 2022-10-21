const Product = require("../Model/Products");
const rec = require("../routes/recommended");

exports.getProductByKeywords = async (req, res) => {
  try {
    let token = req.headers.authentication;
    const verifytoken = jwt.verify(token, process.env.REACT_APP_JWT_SECRETKEY);
    if (!verifytoken)
      return res.status(401).json({ error: "Unauthorized request" });
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
