// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };
  return opencage
    .geocode(requestObj)
    .then((data) => {
      // console.log(data);
      return data.results[0].geometry;
    })
    .catch((error) => {
      console.log("error", error.message);
    });
  // return something...
};

// getPositionFromAddress(  !!! commented out for 3.4
//   "1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8"
// ).then((response) => console.log("here's the console!!!!", response));

module.exports = { getPositionFromAddress };
