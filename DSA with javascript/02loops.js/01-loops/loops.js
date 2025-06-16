// let pr = prompt("Enter the any natural number");

// if (pr === null) {
//     console.log("Program Cancelled");
// } else {
//     let n = Number(pr);

//     if (isNaN(n)) {
//         console.log("invalid output");
//     } else {
//         if (n > 0) {
//             var sum = 0;
//             for (let i = 1; i <= n; i++) {
//                 sum = sum + i;
//             }
//             console.log(sum);
//         } else {
//             console.log("should be positive and more than zero");
//         }
//     }
// }
d

// Note :- which time use for loop vs while loop
//       In case we are going to market and we have list of 10 items and my condaction is only by 10 item list ; in this case use for loop ;
//       In case we have 5000 amount and my condaction is jab tak pese khatam nahi hote tabtak shooping karo ; then we use while loop ;

// var ans = prompt('enter your name (and exit for close)');

// while (ans !== 'exit') {
//     ans = prompt('enter your name (and exit for close)');
// }

// Note :- we have moad 10% then we have 
//  eg:- 234 % 10
//     = 4

//  sum of digit
let pr = prompt('Enter a number !')
if (pr === null) {
    console.log('Cancelled')
} else {
    let n = Number(pr)

    if (isNaN(n)) {
        console.log("pls enter a number !")
    } else {
        if (n > 0) {                  // e.g., n = 1234
            let sum = 0;              // sum = 0
            while (n > 0) {           // loop while n > 0
                var rem = n % 10;     // get last digit: rem = 4 → 3 → 2 → 1
                sum = sum + rem;      // sum = 0+4 → 4+3 → 7+2 → 9+1 = 10
                n = Math.floor(n / 10); // remove last digit: n = 123 → 12 → 1 → 0
            }
            console.log(sum);         // prints: 10

        } else {
            console.log('pls enter a +ve or more than 0');
        }
    }
} 