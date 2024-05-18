//1
function sumDivisibleByThreeOrFive() {
    let sum = 0;

    for (let i = 200; i <= 2700; i++) {
       
        if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
            sum += i;
        }
    }

    return sum;
}


console.log("Sum:", sumDivisibleByThreeOrFive());

//2

function shiftValues(X) {
    
    if (X.length <= 1) {
        return X;
    }

   
    let lastElement = X.pop();

    
    for (let i = X.length - 1; i >= 0; i--) {
        X[i + 1] = X[i];
    }

   
    X[0] = lastElement;

    return X;
}


let X = [2, 1, 6, 4, -7];


console.log("Shifted array:", shiftValues(X)); 

//3
function fizzBuzz() {
    const result = [];

    for (let i = 1; i <= 135; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }

    return result;
}


const fizzBuzzArray = fizzBuzz();

console.log(fizzBuzzArray); 

//4

function sumFibonacci() {
    let sum = 0;
    let prev = 0;
    let curr = 1;

    while (curr < 1000000) {
        if (curr % 2 === 0) { 
            sum += curr;
        }
        let next = prev + curr;
        prev = curr;
        curr = next;
    }

    return sum;
}


console.log("Sum of even Fibonacci numbers below 1,000,000:", sumFibonacci());

//5

function removeNegative(X) {
    return X.filter(num => num >= 0);
}


const X = [1, -2, 4, 1];


console.log(removeNegative(X)); 

//6
function censorWord(X, word) {
    return X.map(str => str === word ? word.replace(/./g, '*') : str);
}


const X = ['Man', 'I', 'Love', 'The', 'Matrix', 'Program'];


console.log(censorWord(X, 'Program')); 

