let a = [10,67, 34, 89, 23, 45, 12];

console.log("Original array (a):", a);
console.log("\nValues of a using a for...in loop:");
for(let i in a){
    console.log(`Index ${i}: ${a[i]}`);
}

const abc = a.some((value) => value > 50);  // The some() method tests whether at least one element in the array passes the test implemented by the provided function. In this case, it checks if any value in the array 'a' is greater than 50. If at least one value is greater than 50, it returns true; otherwise, it returns false.
console.log("\nResult of some() - is any value greater than 50?:", abc);

const abcd = a.every((value) => value > 50); // The every() method tests whether all elements in the array pass the test implemented by the provided function. In this case, it checks if all values in the array 'a' are greater than 50. If all values are greater than 50, it returns true; otherwise, it returns false.
console.log("Result of every() - are all values greater than 50?:", abcd);

const ab = a.find((value) => value > 50); // The find() method returns the value of the first element in the array that satisfies the provided testing function. In this case, it finds the first value in the array 'a' that is greater than 50 and returns it. If no such value is found, it returns undefined.
console.log("Result of find() - first value greater than 50:", ab);

const abcde = a.filter((value) => value > 50); // The filter() method creates a new array with all elements that pass the test implemented by the provided function. In this case, it creates a new array with all values in the array 'a' that are greater than 50.
console.log("Result of filter() - values greater than 50:", abcde);

const map = a.map((value) => value * 2); // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. In this case, it creates a new array where each value in the array 'a' is multiplied by 2.
console.log("Result of map() - values multiplied by 2:", map);

const maps = [];

for (let i = 0; i < a.length; i++) {
    maps.push(a[i]);
}

console.log("Result of for loop - copied values:", maps);

const reduce = a.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // The reduce() method executes a reducer function on each element of the array, resulting in a single output value. In this case, it sums up all the values in the array 'a', starting with an initial value of 0.
console.log("Result of reduce() - sum of all values:", reduce);

let lovey = [23, 45, 67, 89, 12, 34, [56, 78, 90], [12, 34, 56, [78, 90, 12]]];

console.log("\nOriginal nested array (lovey):", lovey);
console.log("Result of flat() - flattened by one level:", lovey.flat()); // The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. In this case, it flattens the array 'lovey' by one level, resulting in a single-level array containing all the elements.

console.log("Result of flat(2) - flattened by two levels:", lovey.flat(2)); // The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. In this case, it flattens the array 'lovey' up to a depth of 2, resulting in a single-level array containing all the elements.

console.log("Result of reverse() - lovey in reverse order:", lovey.reverse()); // The reverse() method reverses the order of the elements in an array in place. In this case, it reverses the order of the elements in the array 'lovey', modifying the original array and returning a reference to the same array.

console.log("Result of flat(Infinity) - completely flattened lovey:", lovey.flat(Infinity)); // The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. In this case, it flattens the array 'lovey' completely, resulting in a single-level array containing all the elements, regardless of how deeply nested they are.