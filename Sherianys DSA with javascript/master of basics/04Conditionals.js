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

let amount = Number(prompt('What is the final amount ?'))

let dis = 0;
if(Math.sign(amount) === -1){
    console.log("pls enter positive value");
} else if (amount > 0 && amount <= 5000) {
    console.log("your discount is 0%");
    dis=0
} else if (amount >= 5001 && amount <= 7000) {
    console.log("your discount is 5%");
    dis = 5
} else if (amount >= 7001 && amount <= 9000) {
    console.log("your discount is 10%");
    dis = 10
} else if (amount >= 9000) {
    console.log("your discount is 20%")
    dis = 20
}
console.log(amount - Math.floor((dis*amount)/100));
