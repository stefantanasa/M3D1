const ex = function (exercise) {
  console.log(`----------Exercise ${exercise}----------`);
};
ex(1);
/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */
const sumOfTwo = function (first, second) {
  switch (first) {
    case second:
      return (first + second) * 3;
    default:
      return first + second;
  }
};

console.log(sumOfTwo(3, 3));
ex(2);
/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */

const isTrue = function (first, second) {
  switch (first || second) {
    case 50:
      return `True 1`;
  }
  switch (first + second) {
    case 50:
      return "True 2";
    default:
      return first + second;
  }
};
console.log(isTrue(25, 24));

ex(3);
/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */
let aString = "Stefan Ionut";

const removeChar = function (position, theString) {
  let makeItArray = Array.from(theString);
  makeItArray.splice(position, 1);
  return makeItArray.join("");
};
console.log(removeChar(3, aString));

ex(4);
/* 4. Create a function to find and return the largest of three given integers. */
const largest = function (first, second, third) {
  switch (first > second) {
    case true:
      switch (first > third) {
        case true:
          return first;
        default:
          return third;
      }
    case false:
      switch (second > third) {
        case true:
          return second;
        case false:
          return third;
      }
  }
};
console.log(largest(6, 5, 7));
/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */
ex(5);

const inRange = function (first, second) {
  if (
    (first > 40 && first < 60) ||
    (second > 40 && second < 60) ||
    (first > 70 && first < 100) ||
    (second > 70 && second < 100)
  ) {
    return "True";
  } else {
    return "False";
  }
};

console.log(inRange(10, 71));

/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */

const makeCopies = function (theString, howMany) {
  return theString.repeat(howMany);
};
console.log(makeCopies("Stefan", 5));
/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */
ex(7);
const searchCity = function (theString) {
  if (theString.includes("los") === true) {
    return theString;
  }
};

console.log(searchCity("los angeles"));
/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */

ex(8);
euros = [1, 2, 3, 4, 5];
console.log(euros.reduce((total, amount) => total + amount));

/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */
ex(9);
let newArray = [2, 5, 6];

let check = (array) => array.includes(1 || 3);
console.log(check(newArray));

/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */
ex(10);

let check2 = (array) => !array.includes(1 || 3);
console.log(check2(newArray));
/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */
arrayOfStrings = ["this", "is", "an", "array!"];

const checkLongerString = (array) => {
  array.reduce((a  , b) => {
    console.log(Math.max(a, b));
  });
};

console.log(checkLongerString(arrayOfStrings));
/* 12. Create a function to find the types of a given angle:
  1. Acute angle ??? between 0 and 90 degrees. Return `acute`.
    2. Right angle ??? 90 degree. Return `right`
    3. Obtuse angle ??? between 90 and 180. Return `obtuse`
    4. Straight angle ??? 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/

/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */

/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */

/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */

/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */

/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */

/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor ??? return `Diego`
    The number has 5 as a factor ??? return `Riccardo`
    The number has 7 as a factor ??? return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    ?????? The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */

/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */
