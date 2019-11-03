// Implement pow(x, n), which calculates x raised to the power n (xn).

function pow(x, n) {
    if (Math.floor(x) < 100 && Math.ceil(x) > -100 && Number.isInteger(n)) {
        if (n === 0) {
            return 1
        } else {
            let result = n < 0 ? 1 / countPow(x, Math.abs(n)) : countPow(x, n);
            return result.toFixed(5)
        }
    } else {
        console.log('error: -100.0 < x < 100.0, n must be an integer');
    }
}

function countPow(x, n) {
    return n === 1 ? x : x * countPow(x, n - 1)
}

console.log(pow(2.00000, 10));
console.log(pow(2.10000, 3));
console.log(pow(2.00000, -2));
