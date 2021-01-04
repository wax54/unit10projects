/**
 * Rewrite the fallowing function to ES2015 standards
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