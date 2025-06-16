let pr = prompt('Enter a number ?')

if (pr === null) {
    console.log('program cancelled !');
} else {

    let n = Number(pr)

    if (isNaN(n)) {
        console.log('Invalid input');
    } else {
        if (n > 0) {

        } else {
            console.log('should be positive and more than zero ');
        }
    }
}f