/**
 * Rewrite the fallowing function to ES2015 standards
 * 
Same keys and values

ES5 Version:
function createInstructor(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    }
}

ES2015 Version:
*/
function createInstructor(firstName,lastName){
    return {
        firstName,
        lastName
    };
}


/**
 * Computed Property Names
 * 
 * ES5 Version:
 * 
    var favoriteNumber = 42;
    var instructor = {
        firstName: "Colt"
    }
    instructor[favoriteNumber] = "That is my favorite!"

 * ES2015 Version:
 */
const favoriteNumber = 42;
const instuctor = {
    firstName: "Colt",
    [favoriteNumber]: "That is myfavorite!"
};

/**
 * Object Methods
 * 
 * ES5 Version:
 * 
    var instructor = {
        firstName: "Colt",
        sayHi: function(){
            return "Hi!";
        },
        sayBye: function(){
            return this.firstName + " says bye!";
        }
    }
 * ES2015 Version:
 */

 const anotherInstructor = {
     firstName: "Colt",
     sayHi(){ return "Hi!";},
     sayBye(){ return `${this.firstName} says bye!`; }
 };

 /**
createAnimal function

Write a function which generates an animal object. The function should accepts 3 arguments:

species: the species of animal (‘cat’, ‘dog’)

verb: a string used to name a function (‘bark’, ‘bleet’)

noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
Use one or more of the object enhancements we’ve covered.

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"
  */


const createAnimal = (species, verb, noise) => {
    return {
        species,
        [verb](){ return noise }
    }
}