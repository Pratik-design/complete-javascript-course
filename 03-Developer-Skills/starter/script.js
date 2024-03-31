// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//coding challenge #1

//take an array and print data for temperatures like "...21*C on day 1...14*C on day 2..."
// `$arr[i]` -> accessing the value from the array and converting it to a string

const temp = function (arr) {
  let resultString = '...';

  for (let i = 0; i < arr.length; i++) {
    //resultString = resultString + `${arr[i]}°C on day ${i + 1} ... `; // a way to convert array element to string
    resultString += `${arr[i]}°C on day ${i + 1} ... `;
  }

  return resultString;
};

console.log(temp([18, 42, 12]));
