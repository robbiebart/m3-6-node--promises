// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------

const { getIssPosition } = require("./exercise-3.1");
const { getPositionFromAddress } = require("./exercise-3.2");
const getDistance = (pos1, pos2) => {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
};

const getDistanceFromIss = (address) => {
  return getIssPosition().then((pos1) => {
    return getPositionFromAddress(address).then((pos2) => {
      return getDistance(pos1, pos2);
    });
  });
};

getDistanceFromIss("5 Avenue Anatole France, 75007 Paris, France").then(
  (response) => {
    console.log(response);
  }
);
/*
whichver promise you have to do first, then do .then
and then put the second promise in the .then and do that promise
if that result needs the result of the first promise, you want to do it in the .then

get position from address

use 3.1 to get iss position

input both lats and lngs into get distance formula, and return that answer in last .then that you
in the .then of the second promise (issposition.then, addressposition.then, do it there)


*/
