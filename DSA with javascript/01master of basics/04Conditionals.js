// Q. age cheacker 

// let ans = prompt("Enter you age..")
// console.log(ans);

// if (isNaN(ans)) {
//     alert('enter a number')
// } else if (ans >= 18) {
//     console.log("you can vote");
// } else {
//     console.log("you can not vote");
// } 

// Q shopin discount

// let amount = Number(prompt('What is the final amount ?'))

// let dis = 0;
// if(Math.sign(amount) === -1){
//     console.log("pls enter positive value");
// } else if (amount > 0 && amount <= 5000) {
//     console.log("your discount is 0%");
//     dis=0
// } else if (amount >= 5001 && amount <= 7000) {
//     console.log("your discount is 5%");
//     dis = 5
// } else if (amount >= 7001 && amount <= 9000) {
//     console.log("your discount is 10%");
//     dis = 10
// } else if (amount >= 9000) {
//     console.log("your discount is 20%")
//     dis = 20
// }
// console.log(amount - Math.floor((dis*amount)/100));


// Q bil of elecricity ? 
// |   unite       |      price    |
// |  up to 100    |  rs. 4.2/unit |
// | 101 - 200     |  rs. 6/unit   |
// | 201 - 400     |  rs. 8/unit   |
// | more than 400 | rs. 13/unit   |

let unit = Number(prompt("Enter Electricity unit ?")) // 700
let amount = 0;

if (unit > 400) {
    amount = (unit - 400) * 13
    unit = 400
} // 400
if (unit > 200 && unit <= 400) {
    amount += (unit - 200)
    unit = 200
} // 200
if (unit > 100 && unit <= 200) {
    amount += (unit - 100) * 6
    unit = 100
}
amount += unit * 4

console.log(amount);
