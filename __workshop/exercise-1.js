// Exercise 1
// ------------
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (array) => {
  myPromise = new Promise((resolve, reject) => {
    if (array.every((element) => typeof element === "string")) {
      const newArray = array.map((element) => {
        return element.toUpperCase();
      });
      resolve(newArray);
    } else {
      reject("array was ritually unclean");
    }
  });
  return myPromise;
};

const sortWords = (array) => {
  return new Promise((resolve) => {
    resolve(array.sort());
  });
};

// write some code
// };

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
