// Exercise 2.1 - Testing
// ----------------------

// require the 'request-promise' module.
const request = require("request-promise");

const testGreeting = () => {
  request("https://journeyedu.herokuapp.com/hello") // 1
    .then((response) => {
      // console.log(response);
      // console.log(response.status);
      let parsedResponse = JSON.parse(response); // 2
    // })
    // .then((parsedResponse) => {
      console.log(parsedResponse);
      return parsedResponse.data.text; // 3
    })
    .catch((err) => console.log("Error: ", err));
    
};

testGreeting().then((result) => console.log(result));


/* 
whenever .then is used, its arg is the result of the promise that it follows
parsedResponse.data.text and if you return for example 2 and chain another .then to that line,
the argument of the next inner function is equal to two
*/

/*
line 13 adn 14 can be removed and it still works
the second .then is a bit useless, it seems like you use it arbitrarily, cause you dont 
really need to here

you will need a second then block when you
*/