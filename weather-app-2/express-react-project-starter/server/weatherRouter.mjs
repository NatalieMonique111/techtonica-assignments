import express from "express";

// import * as db from "./db.mjs";

import fetch from "node-fetch";


const weatherRouter = express.Router();

weatherRouter.get("/:city", async (request, response) => {
  const city = request.params.city.substring(1); //remove :
  const weather = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=9c61c7f89af09bd39e608da996495a41&units=imperial`);
  console.log('weather RESPONSE', await weather);
  const dataAsJSON = await response.json(weather);
  return dataAsJSON.list;
});


// weatherRouter.get("/", (request, response) => {
//   fetch(
//     `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=9c61c7f89af09bd39e608da996495a41&units=imperial`,
//   )
//     //first then turns it into a json object
//     .then((res) => {
//       console.log(res, "ress");
//       return res.json();
//     })
//     //use .then data to be shown on the app because the res.json is an asynchronous function
//     .then((data) => {
//       // console.log(data, "????");
//       // In express, this would be response.json(data)
//       response.json(data.list);
//     });

//   };


export default weatherRouter;
