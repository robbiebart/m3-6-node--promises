// Exercise 2.2 - Greeting
// ----------------------

// require the 'request-promise' module.
const request = require("request-promise");

const greeting = (langCode) => {

  return request(`https://journeyedu.herokuapp.com/hello/${langCode}`) // 1
    .then((response) => {
      let parsedResponse = JSON.parse(response); // 2
      return parsedResponse;
      
    }) 
    .catch((err) => console.log("Error: ", err));
};

// Testing
greeting("fr").then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }

// 3
// the colon exists to let the backend know that what follows is a param
