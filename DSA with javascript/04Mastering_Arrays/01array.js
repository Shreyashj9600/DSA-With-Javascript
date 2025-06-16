// let arr = []
// arr.push(100)
// console.log(arr);

//--------------------------------------
// get 5 values in prompt

// let arr = new Array(5)

// for(let i = 0; i < arr.length; i++){
//     arr[i] = Number(prompt("enter a number"))
//     console.log(i);
// }
// console.log(arr);

//--------------------------------------
// addation of array all element 

// let arr = [10, 20, 30, 40, 50]

// sum = 0;
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i]
// }
// console.log(sum);

//--------------------------------------
// finding a max number in arrays

// let arr = [10, 2, 78, 108, 4, 8];

// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i]
//     }
// }
// console.log(max);

// // using math method() 
// let maxNumber = Math.max(...arr)
// console.log("maxNumber", maxNumber);

// how to find second largest number in give arr 

// let myArr = [10, 30, 40, 40, 40, 40, 40];
// //                       i 
// let max = Math.max(myArr[0], myArr[1])  // 40
// let sMax = Math.min(myArr[0], myArr[1]) // 30                       

// for (let i = 2; i < myArr.length; i++) {
//     if (myArr[i] > max) {
//         sMax = max
//         max = myArr[i]
//     }
//     else if (myArr[i] > sMax && max != myArr[i]) {
//         sMax = myArr[i]
//     }
// }
// console.log(sMax);

// Revercie the array

// let arr = [10, 20, 30, 40, 50]

// let i = 0, j = arr.length - 1;

// while (i != j) {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//     i++
//     j--
// }
// console.log(arr);


// for (let i = arr.length-1; i >= 0; i--) {
//     console.log(arr[i])
// }

// swaping i and j positions 

let arr = [1, 1, 0, 1, 0, 1, 1, 0, 0]

let i = 0, j = 0

while (i < arr.length) {
    if (arr[i] == 0) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        j++
    }
    i++
}

console.log(arr);   