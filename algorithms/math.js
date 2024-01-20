//Fibonacci Sequence - sequence of numbers that each number is the sum of the 2 previous
function fibonacci(n) {
    const fib = [0,1];

    for(i=2; i<n; i++) {
        fib[i] = fib[i-1] + fib[i-2]
    };

    return fib;
}

// console.log(fibonacci(7)) // [0,1,1,2,3,5,8] 

//________________________________________________________________________

//Prime Numbers - only divisible by 1 and itself and it is greater than 1
function isPrime(n) {
    if(n <2) {
        return false;
    };

    for(i=2; i<n; i++) {
        if(n%i === 0) {
            return false;
        }
    }

    return true;
};

// console.log(isPrime(7)) // true 

//___________________________________________________________________________
//PowerOfTwo - a number is the power of two if 2 ^n equals x(the number in question)

function isPowerOfTwo(n) {
    if(n < 1) {
        return false;
    }
    while (n > 1) {
        if(n % 2 !==0) {
            return false
        }
       n = n/2
    }

    return true
}
//Big-0 = O(logn)
// console.log(isPowerOfTwo(5))

//more optimized O(1) costant time
//bitwise operations directly manipulate bits, the binary digits( 0s and 1s)
//example of bitwise operation AND (&) where the resultant bit is 1 if both operands are 1
//ex: 1101 & 1011 = 1001
function isPowerOfTwoBitwise(n) {
    if (n <1) {
        return false;
    }
    return ((n & (n-1)) === 0)
};

// console.log(isPowerOfTwoBitwise(3))
