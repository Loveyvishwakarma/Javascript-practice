//For in loop is used to iterate over the properties of an object or the elements of an array. In this case, it is used to iterate over the elements of the array 'arr' and log each element to the console.

let nums = [1,2,3,4,5,6,7,8,9,10];

for(let i in nums){
    console.log(nums[i]);
}

//Counting the digits in a number using while loop

let num = 12345;
count = 0;

while(num>0){
    num = Math.floor(num / 10);
    count++;
}

console.log(count);

//Counting if a number is prime or not

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));
let isprime = true;

if(n<2){
    isprime = false;
}

for(let i = 2; i<n; i++){
    if(n%i == 0){
        isprime = false;
        break; 
    }
}

if(isprime){
    console.log("It is prime");
}
else{
    console.log("It is not prime");
}

//Using splice to remove elements from an array

let arr = [1,2,3,4,5,6,7,8,9,10];

arr.splice(2, 3); // Removes 3 elements starting from index 2

console.log(arr);

arr.splice(4, 0, 11, 12); // Adds 11 and 12 at index 4 without removing any elements

console.log(arr);

arr.splice(1,1, 13, 14); // Removes 1 element at index 1 and adds 13 and 14

console.log(arr);