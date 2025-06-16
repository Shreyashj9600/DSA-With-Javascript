//  reverce of numbers 
let pr = prompt('Enter a number !')
if (pr === null) {
    console.log('Cancelled')
} else {
    let n = Number(pr)

    if (isNaN(n)) {
        console.log("pls enter a number !")
    } else {
        if (n > 0) {
            let reversedNum = 0; // 3
            while (n > 0) {
                let lastDigit = n % 10;
                reversedNum = reversedNum * 10 + lastDigit
                n = Math.floor(n / 10)
            }
            console.log(reversedNum)
        } else {
            console.log('pls enter a +ve or more than 0');
        }
    }
}

// first iteration:
// lastDigit = 123 % 10 = 3
// reversedNum = 0 * 10 + 3 = 3
// num = Math.floor(123 / 10) = 12

// Second iteration:
// lastDigit = 12 % 10 = 2
// reversedNum = 3 * 10 + 2 = 32
// num = Math.floor(12 / 10) = 1

// Third iteration:
// lastDigit = 1 % 10 = 1
// reversedNum = 32 * 10 + 1 = 321
// num = Math.floor(1 / 10) = 0