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

 