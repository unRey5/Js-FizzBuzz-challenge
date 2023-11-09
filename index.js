//Fizbuzz Challenge

for (let o = 1; o <= 100; o++) {
    if (o % 3 === 0 && o % 5 === 0) {
        console.log('FizzBuzz');
    } else if (o % 5 === 0) {
        console.log("Buzz");
    } else if (o % 3 === 0) {
        console.log('Fizz');
    } else {
        console.log(o);
    }
        
}