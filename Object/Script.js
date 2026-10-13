const Lovey ={
    Name: "Lovey Vishwakarma",
    Age: 21,
    Address: "Meerut",
    PhoneNumber: 1234567890,
}

Lovey.Age = 22; // Update the age property
console.log(Lovey);

Lovey.Course = "Computer Science"; // Add a new property to the object
console.log(Lovey); 

const entries = [['Name', 'Lovey Vishwakarma'], ['Age', 22], ['Address', 'Meerut'], ['PhoneNumber', 1234567890], ['Course', 'Computer Science']]; // Array of key-value pairs

const student = Object.fromEntries(entries); // Convert the array of entries into an object
console.log(student); // Output the student object

Object.assign(Lovey,student); // Merge the student object into the Lovey object

console.log(Lovey); //Output the merge lovey object

console.log(student); // Output the student object


const goodstudent = Object.entries(student);
console.log(goodstudent);

goodstudent.map(value=> 
    console.log(value) 
);

const info = [{Name: "Lovey", age: "22"}, {Name: "Anjali", age: "21"}, {Name: "Richa", age: "22"}, {Name: "Mayank", age: "21"}];

info.map(value =>
    console.log(value.Name)
);
