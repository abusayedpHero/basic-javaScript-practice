var n = 79;

function isPrime(n){
    for (i = 2; i < n; i++) {
        if(n % i == 0) {
            return 'Not a Prime Number';        
        }
    }
    return 'This Number is a Prime Number';
}
var result = isPrime(139);
console.log(result);