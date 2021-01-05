/** MAPS
 * Variables are not turned into a string like in Objects
 *  you can use any sort of data as a key
 * 
 * Maps are always in the same order, the insertion order
 *  You can Add with set
 *  you can retrieve with get
 *  you can delete with delete
 *  you can check if it exists with has
 *  you can check its size with size
 *  you can iterate over it with forEach
 */


const newMap = new Map();

newMap.set(7, 'Keyed by The Number Seven');
newMap.set('7', 'Keyed by Seven as a string')
console.log('newMap.get(\'7\') -', newMap.get('7'));
console.log('newMap.get(7): -', newMap.get(7));


newMap.set([], 'Keyed by a random empty array');
newMap.get([]) // returns undefined because the refs are not equal
const empty = [];
newMap.set(empty, 'Keyed by a Specific Empty Array Named Empty');
console.log('newMap.get(empty): -', newMap.get(empty));
console.log('newMap -', newMap);

newMap.set(true, 'Keyed by true');
newMap.set('true', 'Keyed by the String \'true\'');

const add = (...nums) => nums.reduce((sum, num) => sum + num);

//initialize a map with data
const nonEmptyMap = new Map([
    [0, 'the firstElement'],
    [true, true],
    [newMap, 'A whole Damn Map'],
    ['add', add]
]);


console.log(nonEmptyMap);


//You can string sets
nonEmptyMap.set(7, 7).set(add, 'operates on any number of numbers and returns their sum');

// .has

nonEmptyMap.has(true); // true
nonEmptyMap.has('true'); // false
nonEmptyMap.has(newMap); // true

// .delete
nonEmptyMap.delete(newMap) //true
nonEmptyMap.has(newMap); //false
nonEmptyMap.delete(newMap) //false

const myMap = new Map([
    [0, 1],
    [1, 2],
    [2, 3]
]);

//.keys

myMap.keys(); // returns an iterable
[...myMap.keys()] //returns an array of all the keys [0,1,2]

// .values
myMap.values(); // returns an iterable of all the values
[...myMap.values()] //returns an array of all the values [1,2,3]

// .size
myMap.size; // 3

// .forEach

myMap.forEach(function (val, key) {
    console.log(key, '<-Key, Value->', val);
});
/*
0 "<-Key, Value->" 1
1 "<-Key, Value->" 2
2 "<-Key, Value->" 3
*/

for (let x of myMap) {
    console.log(x);
}
/*
[0, 1],
[1, 2],
[2, 3]
*/

// With Destructuring
for (let [key, val] of myMap) {
    console.log(key, '<-Key, Value->', val);
}
/*
0 "<-Key, Value->" 1
1 "<-Key, Value->" 2
2 "<-Key, Value->" 3
*/


for (let val of myMap.values()) {
    console.log(val);
}
/*
1
2
3
*/


/**
 * SETS
 *
 * All Values are unique, no Duplicates
 * Any type of data
 *
 *  only takes one iterable for input 
 */

let mySet = new Set();

mySet = new Set(myMap.values());

console.log('mySet - ', mySet); //set(3){1, 2, 3}

mySet.add('tuesday').add(2).add(5); //The 2 will not be added because it already exists in the set
console.log('mySet - ', mySet); //set(5){1, 2, 3, "tuesday", 5} 

mySet.has('tuesday'); //true
mySet.has(2); //true
mySet.has('2'); //false