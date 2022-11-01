const router = require("express").Router();
const {
  login,
  forgotPassword,
  createUser,
  contactus,
  deleteUser
  ,getUser
} = require("../Controller/AuthController");
const {
  getProductByKeywords,
  addProduct,
  updateProduct,
  deleteProduct,
  searchEmail,
  searchUsername,
  addToFaourites,
  getToFaourites,
  addToCart,
  getToCart,
} = require("../Controller/DataController");
const { getPayment } = require("../Controller/StripeController");

router.route("/auth/login").post(login);
router.route("/auth/forgotPassword").put(forgotPassword);
router.route("/auth/createStartupUser").post(createUser);
router.route("/auth/deleteUser").delete(deleteUser)
router.route("/auth/getUser").post(getUser);

router.route("/contactUs").post(contactus)

router.route("/data/getProductByKeyword").get(getProductByKeywords);
router.route("/data/addproducts").post(addProduct);
router.route("/data/updateProduct").put(updateProduct);
router.route("/data/deleteProduct").delete(deleteProduct);

router.route("/data/searchEmail").get(searchEmail);
router.route("/data/searchUsername").get(searchUsername);

router.route("/data/addToFaourites").post(addToFaourites);
router.route("/data/addToCart").post(addToCart);
router.route("/data/getToFaourites").post(getToFaourites);
router.route("/data/getToCart").post(getToCart);

router.route("/auth/create-checkout-session").post(getPayment)

module.exports = router;
