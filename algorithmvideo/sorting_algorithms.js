//______________________Bubble Sort_______________________

//named this way bc higher values are eventually "bubbled" to the top
//successive items in the array are compared and swapped as needed. 
//reenters loop as long as swapped is true 

function bubbleSort(arr) {
    let swapped

    do {
        swapped = false;

        for(let i=0; i < arr.length - 1; i++) {
            if(arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
};

// const arr = [8, 20, -2, 4, 6]
// bubbleSort(arr)
// console.log(arr)

//Big-O - O(n^2) quadratic time complexity bc has 2 (nested) loops; a for loop inside the while do loop

//_______________________Insertion Sort_________________________

//assumes that the first element in the array is sorted and the rest is not sorted
//thats why starts comparing second number of array (position 1) with first 
//as algorithm progresses, sorted part of the array remains to the left 
//compares rt most part of left side of array to number to insert
//elements are moved to the right to accomodate appropriate insertion of number 
//finds what index is not value is not greater than number to insert and puts it after that (array[j+1])

function insertionSort(array) {
    for(let i=1; i<array.length; i++) {
        let numberToInsert = array[i];
        let j = i - 1;

        while(j >= 0 && array[j] > numberToInsert) {
            array[j+1] = array[j]
            j -= 1
        };

        array[j+1] = numberToInsert
    }
};

const array = [8, 20, -2, 4, -6];
insertionSort(array);
console.log(array);

//Big-O = O(n^2) - quadratic time complexity 

//___________________________Quick Sort_______________________________

//takes the last number as a pivot to compare and seperate into left and right array
//so dont need to traverse the entire array, just up to right before the last element
//recursively performs quickSort function until base case is met - when array has 1 or 0 elements, return the same array
//when all subarrays sorted, perform spread operator on them and add all the individual elements into a larger array

function quickSort(array2) {
    if(array2.length < 2) {
        return array2
    };

    let pivot = array2[array2.length - 1]
    let left = []
    let right = []

    for(i=0; i<array2.length-1; i++) {
        if(array2[i] < pivot) {
            left.push(array2[i])
        } else {
            right.push(array2[i])
        }
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)]
};

const array2 = [8, 20, -2, 4, 6]
console.log(quickSort(array2));

//Worst case - O(n^2) when array is already sorted bc iterating with both for loop and recursively 
//Avg case - O(nlogn) with every recursion, the size of array that reenters the quickSort function decreases - O(logn)
//but also * n because of the for loop iterating through the whole array 

//___________________________Merge Sort__________________________________

//the input array is continously split into halves into single element arrays are created
//on each level of the "recursion tree" starting from the bottom the left and right arrays are compared, the lower number pushed to sorted array
//the while loop continues if neither the left and right arrays are not empty after first position comparison
//goes to return statement of merge function when either arrays are empty
//then back up the next level to repeat comparison

//2 parts: 1. make single element arrays 2. compare left and right arrays

function mergeSort(arr) {
    if(arr.length < 2) {
        return arr
    };

    const mid = Math.floor(arr.length/2)
    const leftArr = arr.slice(0, mid)     //up to but not including mid
    const rightArr = arr.slice(mid)       //from mid to end of array 

    return merge(mergeSort(leftArr), mergeSort(rightArr))    //the results of the recursive calls are passed to merge function for merging 

    function merge(leftArr, rightArr) {              //merge function merges two sorted arrays and puts them to a single array 
        const sortedArr = []

        while(leftArr.length && rightArr.length) {       //0 is a falsey value
            if(leftArr[0] <= rightArr[0]) {
                sortedArr.push(leftArr.shift());        //shift method removes first element of array and returns it, then pushed to sorted array
            } else {
                sortedArr.push(rightArr.shift())
            }
        }

        return [...sortedArr, ...leftArr, ...rightArr]
    }
};

const arr = [8, 20, -2, 4, -6]
console.log(mergeSort(arr))

//Big-O: O(nlogn) - has a while loop but also inputs reduced in half from the mergeSort function (logn)