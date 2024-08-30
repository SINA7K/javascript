
function reverseString(str) {
    return str.split('').reverse().join('');
}


function countCharacters(str) {
    return str.length;
}

function capitalizeWords(sentence) {
    return sentence.split(' ')
                   .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                   .join(' ');
}


function findMaximum(arr) {
    return Math.max(...arr);
}


function findMinimum(arr) {
    return Math.min(...arr);
}


function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}


function filterArray(arr, condition) {
    return arr.filter(condition);
}




function factorial(n) {
    if (n < 0) return undefined; 
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}


function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}


function fibonacciSequence(terms) {
    const sequence = [];
    for (let i = 0; i < terms; i++) {
        if (i === 0) sequence.push(0);
        else if (i === 1) sequence.push(1);
        else sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;


console.log(reverseString("hello")); 
console.log(countCharacters("hello")); 
console.log(capitalizeWords("hello world")); 

const numbers = [1, 2, 3, 4, 5];
console.log(findMaximum(numbers));
console.log(findMinimum(numbers)); 
console.log(sumArray(numbers)); 

function isOdd(num) {
    return num % 2 !== 0;
}
console.log(filterArray(numbers, isOdd)); 

console.log(factorial(5)); // 120
console.log(isPrime(7)); // true
console.log(fibonacciSequence(5)); 