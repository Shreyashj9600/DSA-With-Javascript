let prompt = require('prompt-sync')();

let n = Number(prompt('enter a number'))

for (let i = 1; i <= n; i++) {
    let ascii = 65;
    for (let j = 1; j <= i; j++) {
        process.stdout.write(String.fromCharCode(ascii) + " ")
        ascii++;
    }
    console.log()
}
