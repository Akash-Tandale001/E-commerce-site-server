const router = require("express").Router();
const {
  login,
  forgotPassword,
  createUser,
} = require("../Controller/AuthController");
const {
  getProductByKeywords,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../Controller/DataController");

// router.route("/auth/login").post(login);
// router.route("/auth/forgotPassword").put(forgotPassword);
// router.route("/auth/createStartupUser").post(createUser);

router.route("/data/getProductByKeyword").get(getProductByKeywords);
router.route("/data/addproducts").post(addProduct);
router.route("/data/updateProduct").post(updateProduct);
router.route("/data/deleteProduct").get(deleteProduct);

module.exports = router;
