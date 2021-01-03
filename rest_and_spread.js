
//ES5 Code to be Refactored
/**
 * 
 * function filterOutOdds() {
 *      var nums = Array.prototype.slice.call(arguments);
 *      return nums.filter(function (num) {
 *          return num % 2 === 0
 *      });
 * }
 */

const filterOutOdds = (...nums) => (
    nums.filter( (num) => num % 2 === 0)
);


/** 
 * Write a function called findMin that accepts a 
 * variable number of arguments and returns the 
 * smallest argument.
 */

const findMin = (...nums) => {
    return nums.reduce((min,curNum) => min < curNum ? min : curNum);
}

/**
 * Write a function called doubleAndReturnArgs which accepts an 
 * array and a variable number of arguments. The function should 
 * return a new array with the original array values and all of 
 * additional arguments doubled.
 */

 const doubleAndReturnArgs = (arrOfNums, ...restOfNums) => {
     return [...arrOfNums, ...restOfNums.map((num) => num*2)];
 }