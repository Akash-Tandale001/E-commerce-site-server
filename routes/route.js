const router = require("express").Router();
const {
  login,
  forgotPassword,
  createUser,
  contactus,
  deleteUser
} = require("../Controller/AuthController");
const {
  getProductByKeywords,
  addProduct,
  updateProduct,
  deleteProduct,
  searchEmail,
  searchUsername
} = require("../Controller/DataController");

router.route("/auth/login").post(login);
router.route("/auth/forgotPassword").put(forgotPassword);
router.route("/auth/createStartupUser").post(createUser);
router.route("/auth/deleteUser").delete(deleteUser)

router.route("/contactUs").post(contactus)

router.route("/data/getProductByKeyword").get(getProductByKeywords);
router.route("/data/addproducts").post(addProduct);
router.route("/data/updateProduct").put(updateProduct);
router.route("/data/deleteProduct").delete(deleteProduct);

router.route("/data/searchEmail").get(searchEmail);
router.route("/data/searchUsername").get(searchUsername);

module.exports = router;
