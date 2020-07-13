// Exercise 2.3 - Use the error
// ----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

const greeting = (langCode) => {
  let result = request(`https://journeyedu.herokuapp.com/hello/${langCode}`);

  console.log(result);
  console.log("hello");
  //   return (
  //     request(`https://journeyedu.herokuapp.com/hello/${langCode}`) // 1
  //       .then((response) => {
  //         let parsedResponse = JSON.parse(response); // 2
  //         return parsedResponse;
  //       })
  //       // .catch((err) => console.log("Error: ", err));
  //       .catch((err) => {
  //         console.log(err);
  //         return err.error ? JSON.parse(err.error) : err;
  //       })
  //   );
};
greeting("test");
// Testing
// greeting("test").then((result) => console.log(result));

// get the code you wrote in 2.2 and paste it here...

/*
this big object helps if you have a big company and you need more data about the error
when you do throw new error, something like this gets created
the error object can be useful, but in most cases we just want a limited number of things 
from it
*/
