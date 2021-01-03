
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
 * Write a function called mergeObjects that accepts two objects
 *  and returns a new object which contains all the keys and 
 *  values of the first object and second object.
 */


const mergeObjects = (obj1, obj2) => ({...obj1,...obj2});

/**
 * Write a function called doubleAndReturnArgs which accepts an 
 *  array and a variable number of arguments. The function should 
 *  return a new array with the original array values and all of 
 *  additional arguments doubled.
 */

 const doubleAndReturnArgs = (arrOfNums, ...restOfNums) => {
     return [...arrOfNums, ...restOfNums.map((num) => num*2)];
 }

/**For this section, write the following functions
 *  using rest, spread and refactor these functions
 *  to be arrow functions!
 * 
 * Make sure that you are always returning a new array 
 *  or object and not modifying the existing inputs.
 * 
 * 
//remove a random element in the items array
//and return a new array without that item. 

function removeRandom(items) {

}

// Return a new array with every item in array1 and array2. 

function extend(array1, array2) {

}

// Return a new object with all the keys and values
// from obj and a new key/value pair 

function addKeyVal(obj, key, val) {

}


// Return a new object with a key removed. 

function removeKey(obj, key) {

}


// Combine two objects and return a new object.

function combine(obj1, obj2) {

}


// Return a new object with a modified key and value.

function update(obj, key, val) {

}
 */


//remove a random element in the items array
//and return a new array without that item. 

const removeRandom = items => {
    const copy = [...items];
    const rand = Math.floor(Math.random() * copy.length);
    copy.splice(rand,1);
    return copy; 
}


// Return a new array with every item in array1 and array2. 

const extend = (array1, array2) => [...array1, ...array2];


// Return a new object with all the keys and values
// from obj and a new key/value pair 

const addKeyVal = (obj, key, val) => {
    const copy = {...obj};
    copy[key] = val;
    return copy;
};



// Return a new object with a key removed. 

const removeKey = (obj, key) =>{
    copy = {...obj};
    delete copy[key];
    return copy;
}


// Combine two objects and return a new object.

function combine(obj1, obj2) {

}


// Return a new object with a modified key and value.

function update(obj, key, val) {

}