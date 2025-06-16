// string 

let name = "shreyash"
console.log(name)

// ---

let arr = [10, 20, 30, 40, 50]
arr[2] = 100
console.log(arr)

let str = "shreyash"
str[2] = "D"    
console.log(str);


// method of strings 

let s = "shreyash"
console.log(s.length);

// Q. print each char at new line
let str1 = "hello world!"
for (let i = 0; i < str1.length; i++) {
    console.log(str1[i])
}

// Q print in reverse order
let str2 = "javascript"
let rev = "";
for (let i = str2.length - 1; i >= 0; i--) {
    rev = rev + s.charAt(i)
}
console.log(rev);

// Q. check if string is pallindrome or not 
// pallindrom - madam , naman 

// let userInp = prompt("enter a string");
// let revs = "";
// for(let i = userInp.length-1; i >= 0; i--){
//     revs = revs + userInp.charAt(i)
// }

// if(userInp == revs) console.log("pallindrome");
// else console.log("not pallindrome");

// Q. toggel each charactor 

let userStr = prompt('Enter a string')
console.log(userStr);
let toggel = ""
for (let i = 0; i < userStr.length; i++) {
    let ch = userStr.charAt(i)

    if (userStr.charCodeAt(i) >= 65 && userStr.charCodeAt(i) <= 90) {
        toggel = toggel + String.fromCharCode(userStr.charCodeAt(i) + 32)
    } else if (userStr.charCodeAt(i) >= 97 && userStr.charCodeAt(i) <= 122) {
        toggel = toggel + String.fromCharCode(userStr.charCodeAt(i) - 32)
    }
}
console.log(toggel);

// Q. frequency of each character
// hello 
// h - 1
// e - 1
// l - 2
// o - 1

