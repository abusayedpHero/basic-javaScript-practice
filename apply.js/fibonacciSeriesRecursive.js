function factorial(n) {
    if (n ==0) {
        return [0]
    }
    if (n == 1) {
        return [0, 1];
    }
    else{
        // calculate array with nth element
        var fibo = factorial(n-1);
        var nextElement = fibo[n-1] + fibo[n-2];
        fibo.push(nextElement);
        return fibo;
    }
}

var result = factorial(10);
console.log(result);