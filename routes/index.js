import {
  getAllDistrictsControllerMethod,
  getAllRegionsControllerMethod,
  getAllTimelineControllerMethod,
  getVarDataControllerMethod,
  getDataWithTimeControllerMethod,
  getDvfromCatControllerMethod,
  getYearsControllerMethod
} from "../controllers/index.js";
import express from "express";
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//Routes created by Fawad
router.get("/all_districts", getAllDistrictsControllerMethod);
router.get("/all_regions", getAllRegionsControllerMethod);
router.get("/all_timelines", getAllTimelineControllerMethod);
router.get("/get_var_data/:param", getVarDataControllerMethod);
router.get("/get_var_data/:duration/:id", getDataWithTimeControllerMethod);
router.get("/get_dv_from_cat/:cat", getDvfromCatControllerMethod);
router.get("/get_years/:dv_id", getYearsControllerMethod)

module.exports = router;
