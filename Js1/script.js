alert("Hello, World!");

let marks = 75;

{
    let marks = 85;
    console.log(marks); 
}

{
    let marks = 90;
    console.log(marks);
}

console.log(marks);

console.log(typeof marks);

let student = {
    name: "John Doe",
    age: 20,
    grade: "A"
};

console.log(student);


let object_of_student = {
    name: "Lovey",
    age: 21,
    marks: 90,
    grade: "B",

    PhoneNumber: {
        Personal: 1234567890,
        Home: 9876543210,
        work: 4567891230
    },

    course: {
        technical:{
            name: "Computer Science",
            duration: "4 years",
            credits: 120
        },

        nonTechnical:{
            name: "Business Administration",
            duration: "4 years",
            credits: 120
        }
    },

    Address:{
        permanent: "Meerut",
        current: "Delhi"
    },
};


let arr = [2, 4, 6, 8, 10];

console.log(arr);
console.log(typeof arr);

for(let i = 0; i<arr.length; i++){
    sum += arr[i];
}
console.log(sum);

let students = [Alice, Bob, Charlie];

let Alice ={
    name: "Alice",
    age: 20,
    grade: "A"
}

let Bob ={
    name: "Bob",
    age: 21,
    grade: "B"
}

let Charlie ={
    name: "Charlie",
    age: 22,
    grade: "C"
}