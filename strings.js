let firstString = "India";
firstString[0] = 'J'; // strings are immutable - cannot be updated
console.log(firstString); // op -> India

firstString = "England";
console.log(firstString); // op -> England

for(let i=0; i<firstString.length; i++){
    console.log(i);
    console.log(firstString[i]);
}

let temp1 = "A";
let temp2 = "B";

let temp3 = temp1 + " " + temp2;
console.log(temp3); // op -> A B

let res = temp1;
res += temp2;
console.log(res); // op -> AB

let usingConcatMethod = temp1.concat(" ", temp2);
console.log(usingConcatMethod); // op -> A B

let name = "Lion";
let age = 25;
console.log("name:",    name,"age:",age); // op -> name: Lion age: 25

let letter = "A";
console.log(letter.charCodeAt(0)); // op -> 65
let letter2 = "a";
console.log(letter2.charCodeAt(0)); // op -> 97 

let code = String.fromCharCode(98);
console.log(code); // op -> b 

let text = "Hello, JavaScript World!";
console.log(text.includes("Hello")); // true
console.log(text.includes("hello")); // false

console.log(text.indexOf("JavaScript")); // 7
console.log(text.indexOf("!")); // 23
console.log(typeof text.indexOf("!")); // number
// returns -1 if the substring is not present in the full string

text = "I love Javascript";
console.log(text.slice(2, 6)) // love => starting at 2 upto and not including 6
console.log(text.slice(-6)); // script
console.log(text); // original string unmodified

let uppercaseString = "HELLO, WORLD!";
console.log(uppercaseString.toLowerCase()); // hello, world!

let lowercaseString = "abcd";
console.log(lowercaseString.toUpperCase()); // ABCD

let untrimmerText = "   hello world!  ";
console.log(`"${untrimmerText.trim()}"`); // "hello world!"
console.log(`"${untrimmerText.trimStart()}"`); // "hello world!    "
console.log(`"${untrimmerText.trimEnd()}"`); // "   hello world!"

let initialText = "I love JavaScript!";
let updatedText = initialText.replace("JavaScript", "Coding"); // replace method is case-sensitive and only replaces the first occurence in the text
console.log(updatedText); // I love Coding!

let temp = "Ab Ab";
console.log(temp.replace("Ab", "Cd")); // Cd Ab

let temp2 = "A";
console.log(temp2.repeat(10)); // AAAAAAAAAA
