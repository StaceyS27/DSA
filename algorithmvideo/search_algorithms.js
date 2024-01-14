//______________Linear Search_________________________________
//return the index of the target value given an array

function linearSearch(arr, target) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === target) {
            return i;
        };     
    }
    return -1
};

console.log(linearSearch([-5, 2, 10, 4, 6], 10))

//Big-O: O(n)

// _______________Binary Search______________________________
//same as above, return the index of a target value given an array
//binary search can only work on sorted arrays
//since sorted, will first find middle number, if target value is less than, can remove the rt side of the array
//check again middle of the remaining part of the array 

function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex)/2)

        if(arr[middleIndex] === target) {
            return middleIndex;
        };

        if(target < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        };
    }

    return -1;
};

console.log(binarySearch([-5, 2, 4, 6, 10], 10))

//Big-O = O(logn) - the number of times function executeed does increase with an increased length of array, but not linear

//____________________Recursive Binary Search_______________________

function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1);
};


function search(arr, target, leftIndex, rightIndex) {
    if(leftIndex > rightIndex) {
        return -1;
    };

    let middleIndex = Math.floor((leftIndex + rightIndex)/2)
    
    if(target === arr[middleIndex]) {
        return middleIndex;
    };

    if(target < arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex - 1)
    } else {
        return search(arr, target, middleIndex + 1, rightIndex)
    }
};

console.log([-5,2,4,6,10], 6) //3

//Big-O = O(logn)
//not a for loop but search function being called recursively and input size is being cut in half with every call
//always going before or aftee middle index, cutting array in half. 