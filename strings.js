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
