// + - * / % 

// console.log(7%2);

// < > <= >= !== relational operators 
// console.log(10 == 10); // true


// && ||  logical operator 
// && : all condactions is true then op is true
// || : one condaction is true then op is true 

// console.log(10 > 5 && 15 < 12); // false
// console.log(10 > 5 || 15 < 12); // true 

// unary operator ++ --
let i = 11
console.log(i);

i = i++ + ++i   // i = 11 + 13;  Prints 11 (because it tells the old value first).
console.log(i); // 24            After that, i becomes 12.

// solve 
let a = 11;
let b = 22;

let c = a + b + a++ + b++ + ++a + ++b;  // 11 22 11 22 13 24 
console.log("a = " + a) //   13
console.log("b = " + b) //   24
console.log("c = " + c) //  103

let z = 33
z = z++
console.log(z)

let p = true // note: in js true is 1 and false is 0 
p++
console.log(p);

// let q = 10
// let r = ++(q++)
// console.log(r); // error 
