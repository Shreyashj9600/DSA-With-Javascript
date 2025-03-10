let pr = prompt("Enter the any natural number");

if (pr === null) {
    console.log("Program Cancelled");
} else {
    let n = Number(pr);

    if (isNaN(n)) {
        console.log("invalid output");
    } else {
        if (n > 0) {
            var sum = 0;
            for (let i = 1; i <= n; i++) {
                sum = sum + i;
            }
            console.log(sum);
        } else {
            console.log("should be positive and more than zero");
        }
    }
}


// let pr = prompt("Enter any natural number");

// if (!pr) {
//     console.log("Program Cancelled");
// } else {
//     let n = Number(pr);
//     console.log(n > 0 ? (n * (n + 1)) / 2 : "Should be positive and more than zero");
// }
