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
console.log('the first element in the array', first);
console.log('All the rest', last);
