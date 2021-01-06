const teaOrder = {
    type: 'oolong',
    name: 'winter sprout',
    price:12.99,
    hasCaffeine : true,
    qty:3
};

/**renaming variables right inline with ':', 
 * nonExistent keys end up as undefined, 
 * and the restoperator collects everything else into one object
 */ 
let { name:teaName, price, qty, nonExistent, ...otherInfo} = teaOrder;

console.log('teaName', teaName);
console.log('curSale and Quantity', price, qty);
console.log('nonExistent doesn\'t nonExistent, so it is undefined',nonExistent);
console.log('Everything Else is in an array',otherInfo);

let { brewTemp:temp = 175, type = 'tea'} = teaOrder;
console.log('brewTemp wasn\'t defined in teaOrder, so the default was used instead, it was also renamed to temp',temp);
console.log('type is in teaOrder, so the set default wa ignored',type);

const someArr = [1,'second','three',{1:'fourth'},5,6];

// the names don't matter, they are in the order they appear
//    adding an extra comma skips an element

const [first, second, numberThree, randomVariableName,, skipped5ThisIsSix] = someArr;

console.log(first, second, numberThree, randomVariableName, skipped5ThisIsSix);


//using the rest operatorwe can collect the rest into an array

const [firstPlace, ...last] = someArr;
console.log('the first element in the array:', first);
console.log('All the rest:', last);



const person = { 
    name: 'tim',
    age: 68,
    likes: 'hamburgers'
}

function getPerson({name,age:curAge}){
    console.log('name and age being plucked right from a function input:', name,curAge);
    console.log('age doesn\'t not Defined, it was reasigned in the function paramater');
}

getPerson(person);


const dog1 = {
    name: 'Clifford',
    age: 3,
    likes: ['pizza','trains','planes','snacks'],
    cuddliness: {
        softness: 'extreme',
        nuzzles: 'often',
        otherNotes: 'sometimes pulls on leash'
    },
    fears: ['drones']

};

const getSoftness = function({cuddliness: {softness}}){
    return softness;
}
const getALike = ({likes:[first]}) => first;
const getARandomLike = ({likes}) => likes[Math.floor(Math.random()*likes.length)];

console.log('get The softness from dog1:',getSoftness(dog1));
console.log('dog1\'s first like:',getALike(dog1));
console.log('dog1\'s random like:', getARandomLike(dog1));



let delicious = 'Mayo';
let disgusting = 'Whipped Cream';

[delicious, disgusting] = [disgusting, delicious];

console.log(disgusting, 'is Disgusting.');
console.log(delicious, 'is Delicious.');
