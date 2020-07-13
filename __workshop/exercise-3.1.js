// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");
// Returns the current position of the ISS
const getIssPosition = () => {
  return request("http://api.open-notify.org/iss-now.json")
    .then((response) => {
      console.log("response", response);
      let parsedResponse = JSON.parse(response);
      let lng = parsedResponse.iss_position.longitude;
      let lat = parsedResponse.iss_position.latitude;
      let result = { lng, lat };
      console.log("result here", result);
      return result;
    })
    .catch((err) => console.log("Error: ", err));
};

// console.log("getIssPosition", getIssPosition());

getIssPosition().then((result) => console.log(result));

/*
function call on line 21 becomes whatever the function returns
before i added a return, on line 21 i was calling a function and it was returning 
undefined, and i was trying to do undefined.then

return request on line 8 which allows there to be a .then on 23, but also a return on 16 which
the result of the promise that getIss returns as the argument of the .then that's called on it

getIssPosition is returning a promise, when you call it, wherever you call it, it becomes 
a promise

you can take line 8-17 and paste it in place of getIss function call and it would work,
*/
