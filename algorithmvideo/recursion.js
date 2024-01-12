//recursion is a problem solving technique where the solution depends 
//on solutions to smaller instances of the same problem 
//the function will call itself 

function recursiveFibonacci(n) {
    if(n < 2) {
        return n
    }

    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
 }

// function called again to find answer. had O(2^n)

//__________________Recursive Factorial_________________________________
function recursiveFactorial(n) {
    if (n===0) {
        return 1
    };

    return n * recursiveFactorial(n-1);
}
// factorial function does not need to be defined because the base case (n=0) is the simplest scenerio that returns a result 
// O(n) time complexity - function called the same number of times as n 
