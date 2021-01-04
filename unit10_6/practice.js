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