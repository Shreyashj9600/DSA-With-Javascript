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
// addading array element 

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

let myArr = [10, 30, 56, 43, 29, 64, 49, 60];

let max = Math.max(myArr[0] , myArr[1])
let sMax = Math.min(myArr[0] , myArr[1])

for(let i = 2; i < myArr.length; i++) {
    if(myArr[i] > max){
        max = myArr[i]
        sMax = max
    }
}

