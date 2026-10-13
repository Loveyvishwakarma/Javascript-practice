let FirstName = "Lovey";
let LastName = "Vishwakarma";
let FullName = FirstName + " " + LastName;

console.log(`FirstName as array: ${FirstName.split("")}`); // The split() method splits a string into an array of substrings based on the specified separator. In this case, it splits the string 'FirstName' into an array of individual characters.
console.log(`LastName as array: ${LastName.split("")}`); // The split() method splits a string into an array of substrings based on the specified separator. In this case, it splits the string 'LastName' into an array of individual characters.

console.log(`Full Name: ${FullName}`); 
console.log(`First 3 characters of FirstName: ${FirstName.slice(0, 3)}`); // The slice() method extracts a section of a string and returns it as a new string, without modifying the original string. In this case, it extracts the first three characters of the string 'FirstName'.
console.log(`First 3 characters of LastName: ${LastName.slice(0, 6)}`); // The slice() method extracts a section of a string and returns it as a new string, without modifying the original string. In this case, it extracts the first three characters of the string 'LastName'.

console.log(FirstName.replaceAll("o", "a")); // The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement. In this case, it replaces all occurrences of the character 'o' in the string 'FirstName' with the character 'a'.
console.log(LastName.replaceAll("a", "o")); // The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement. In this case, it replaces all occurrences of the character 'a' in the string 'LastName' with the character 'o'.