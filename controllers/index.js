import {
  getMethodByQuery,
  getMethodBySP,
  getSingleMethodBySP,
} from "../services/index";

//Handlers created by Fawad
export const getAllRegionsControllerMethod = async (req, res) => {
  try {
    const result = await getMethodByQuery("location", "*", null);
    console.log(`result`, result);
    let res1 = JSON.parse(JSON.parse(result));
    res.json({
      response_code: "0000",
      response_message: res1,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getAllDistrictsControllerMethod = async (req, res) => {
  try {
    const result = await getMethodByQuery(
      "location l, region_relation rr",
      "l.location_name",
      "l.location_id = rr.region_id and location_id > 6"
    );
    const res1 = JSON.parse(JSON.stringify(result));
    res.json({
      response_code: "0000",
      response_message: res1,
    });
  } catch (error) {
    console.error(error);
    res.json({
      response_code: "9991",
      response_message: "Oops! Something went wrong",
    });
  }
};

export const getAllTimelineControllerMethod = async (req, res) => {
  try {
    const result = await getMethodByQuery("timeline", "t_id", null);
    let res1 = JSON.parse(JSON.stringify(result));
    console.log(result[1]);
    console.log(res1[1]);
    res.json({
      response_code: "0000",
      response_message: res1,
    });
  } catch (error) {
    console.error(error);
    res.json({
      response_code: "9992",
      response_message: "Oops! Something went wrong",
    });
  }
};

export const getVarDataControllerMethod = async (req, res) => {
  try {
    const param1 = req.params.param;
    const result = await getSingleMethodBySP("sp_getvardata", param1);
    let res1 = JSON.parse(JSON.stringify(result));
    console.log(`result`, res1);

    res.json({
      response_code: "0000",
      response_message: res1,
    });
  } catch (error) {
    res.json({
      response_code: "9993",
      response_message: "Oops! Something went wrong",
    });
  }
};

export const getDataWithTimeControllerMethod = async (req, res) => {
  try {
    console.log("You have consumed the newest API.");
    let duration = req.params.duration;
    let variable = req.params.id;

    console.log(
      `You are trying to access archives of ${duration} for ${variable}`
    );

    let value = [duration, variable];

    let data = await getMethodBySP("sp_getdatawithtime", value);
    let res1 = JSON.parse(JSON.stringify(data));
    res.json({
      response_code: "0000",
      response_message: res1,
    });
  } catch (error) {
    console.log(error);
    res.json({
      response_code: "9994",
      response_message: "Oops! Something went wrong",
    });
  }
};

export const getDvfromCatControllerMethod = async (req, res) => {
  try {
    let val = req.params.cat;
    let data = await getMethodByQuery("g_dv_rel", "*", `cat_id = ${val}`);
    res.json({
      response_code: "0000",
      response_message: data,
    });
  } catch (error) {
    console.error(`error`, error);

    res.json({
      response_code: "7878",
      response_message: "Oops! Something went wrong!",
    });
  }
};

export const getYearsControllerMethod = async (req, res) => {
  try {
    let dv_id = req.params.dv_id;
    console.log(`dv_id`, dv_id)
    let data = await getSingleMethodBySP('sp_getavailableduration', dv_id);
    console.log('data', data)
    res.json({
      response_code : "0000",
      response_message : data 
    })
    
  } catch (error) {
    console.error("Error", error);
    res.json({
      response_code : "1254",
      response_message : "Oops! Something went wrong. Tell administrator its code 1254."
    })
  }
}