function fizzBuzz(){
    let message = "";
    for (let nombre = 1; nombre <= 20; nombre++) {
        if (nombre % 3 === 0 && nombre % 5 !== 0) {
            message += 'Fizz';
        }
        if (nombre % 5 === 0 && nombre % 3 !== 0 ) {
            message += 'Buzz';
        }
        if (nombre % 5 === 0 && nombre % 3 === 0 ) {
            message += 'FizzBuzz';
        }
        if (nombre % 3 !== 0 && nombre % 5 !== 0) {
            message += nombre;
        }
        if(nombre != 20){
            message += ', ';
        }
    }
    return message;
}
console.log(fizzBuzz());
