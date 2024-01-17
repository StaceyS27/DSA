//__________________Cartesian Product________________________

//multiply first element of first array with all the elements of the second array 
//continue to multiply each element on the first array with all the elements on the second array

function cartesianProduct(arr1, arr2) {
    const result = []

    for(let i=0; i<arr1.length; i++) {
        for(let j=0; j<arr2.length; j++) {
            result.push([arr1[i], arr2[j]])
        }
    }

    return result
};

const arr1 = [1, 2]
const arr2 = [3, 4, 5]

console.log(cartesianProduct(arr1, arr2))  

//expected: [[1,3], [1,4], [1,5], [2,3], [2,4], [2,5]]

//Big-O = O(mn) - time complexity isnt O(n^2) because both arrays are not of the same size. 
//can be O(n^2) if they are

//__________________________Climbing Staircase_______________________

//Problem: find the number of ways you can climb (n)th number of stairs if you can only climb 1 or 2 steps at a time
//example: climbing 2 stairs -> only 2 options (2) or (1,1) ; climbing 3 stairs -> 3 ways (1,1,1) or (1,2) or (2,1)

function climbingStaircase(n) {
    const noOfWays = [1, 2]             //know that to climb 1 step only 1 way and 2, there are 2 ways
                                       
    for(let i=2; i<=n; i++) {
        noOfWays[i] = noOfWays[i-1] + noOfWays[i-2]        //follow the fibonacci sequence and can find number of ways for (n)th steps
    }

    return noOfWays[n - 1]                            //doesnt align exactly, 1 step coincides with 0th posititon, 2 steps with 1st etc 
};

console.log(climbingStaircase(1)) // 1      follows the fibonacci sequence where each number is the sum of the two previous numbers
console.log(climbingStaircase(2)) // 2
console.log(climbingStaircase(3)) // 3
console.log(climbingStaircase(4)) // 5
console.log(climbingStaircase(5)) // 8
console.log(climbingStaircase(6)) // 13

//Big-0 = O(n) linear time complexity bc it has a for loop 