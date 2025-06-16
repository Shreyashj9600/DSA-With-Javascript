// do {
//     console.log('hey');
// } while (12 > 13)

// var i = 1;
// do {
//     console.log('hello');
//     i++;
// } while (i <= 10)

// guess the number 

let random = Math.floor(Math.random() * 100) + 1;
console.log(random);

let guess;
console.log(guess);

while (random !== guess) {
    guess = Number(prompt("Guess the number "))
    if (guess < 0 || guess > 100) {
        console.log("try again b/w 1-100");
        continue;
    } else if (random > guess) {
        console.log("too high , try again");
    } else if (random < guess) {
        console.log("too low , try again");
    } else {
        console.log("Congrats and number was ", guess);
    }
}   