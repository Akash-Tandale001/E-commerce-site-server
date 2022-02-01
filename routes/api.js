const router = require('express').Router();
const mob = require('./mobilesdata');
const lap = require("./laptopsdata")
const tvs = require("./tvsdata")

router.get("/mobile" ,async(req,res)=>{
    try {
        res.status(200).json(mob);
      } catch (err) {
        res.status(400).json({
          message: "Some error occured",
          err
        });
      }
})

router.get("/laptops" ,async(req,res)=>{
  try {
      res.status(200).json(lap);
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
})
router.get("/tvs" ,async(req,res)=>{
  try {
      res.status(200).json(tvs);
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
})
module.exports = router;