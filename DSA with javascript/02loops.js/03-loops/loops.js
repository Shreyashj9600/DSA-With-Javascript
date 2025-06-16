//  Strong numbers 
let pr = prompt('Enter a number !')
if (pr === null) {
    console.log('Cancelled')
} else {
    let n = Number(pr)

    if (isNaN(n)) {
        console.log("pls enter a number !")
    } else {
        if (n > 0) {
            var sum = 0;
            let copy = n;
            while (n > 0) {
                var rem = n % 10;
                var fact = 1;
                for (let i = 1; i <= rem; i++) {
                    fact = fact * i;
                }
                sum = sum + fact;
                n = Math.floor(n / 10)
            }
            console.log(sum);
            if (copy === sum) {
                console.log('strong');
            }
            else {
                console.log('not strong');
            }

        } else {
            console.log('pls enter a +ve or more than 0');
        }
    }
}