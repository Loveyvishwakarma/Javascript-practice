let a = [10,67, 34, 89, 23, 45, 12];

for(let i in a){
    console.log(a[i]);
}


const abc = a.some((value) => value > 50);  // The some() method tests whether at least one element in the array passes the test implemented by the provided function. In this case, it checks if any value in the array 'a' is greater than 50. If at least one value is greater than 50, it returns true; otherwise, it returns false.
console.log(abc);

const abcd = a.every((value) => value > 50); // The every() method tests whether all elements in the array pass the test implemented by the provided function. In this case, it checks if all values in the array 'a' are greater than 50. If all values are greater than 50, it returns true; otherwise, it returns false.
console.log(abcd);

const ab = a.find((value) => value > 50); // The find() method returns the value of the first element in the array that satisfies the provided testing function. In this case, it finds the first value in the array 'a' that is greater than 50 and returns it. If no such value is found, it returns undefined.
console.log(ab);

const abcde = a.filter((value) => value > 50); // The filter() method creates a new array with all elements that pass the test implemented by the provided function. In this case, it creates a new array with all values in the array 'a' that are greater than 50.
console.log(abcde);

const map = a.map((value) => value * 2); // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. In this case, it creates a new array where each value in the array 'a' is multiplied by 2.
console.log(map);

const maps = [];

for (let i = 0; i < a.length; i++) {
    maps.push(a[i]);
}

console.log(maps);

const reduce = a.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // The reduce() method executes a reducer function on each element of the array, resulting in a single output value. In this case, it sums up all the values in the array 'a', starting with an initial value of 0.
console.log(reduce);