// let a = 5;
// console.log(a++); 
// console.log(a);


// let b = 10;
// console.log(++b); 
// console.log(b);


let c = 20;
let result = c++ + ++c;
console.log(result); 

let d = 7;
d = d++ + ++d + d++;   
console.log(d); 

// let x = 3;
// let y = x++ + ++x;
// console.log(x, y);

let p = 7;
p = p++ + ++p;
console.log(p); // Output should be 15

let num = 100;
num = num-- - --num;
console.log(num);

let a = 50;
let b = a++ + --a + a-- - ++a;
console.log(a , b);

let x = 20;
let y = --x + x++ - x-- + ++x;
console.log(x, y);
