// array can contain a mix of data types within the same array ex: objects, numbers, or strings
const arr = [1, 2, 3, "Vishwas"]

// push: add element to the end of the array 
arr.push(4)

// unshift: add element to the beginning of the array 
arr.unshift(0)

// pop: remove element from the end of the array
arr.pop()

// shift: remove element from the beginning of the array
arr.shift()

// for of loop: get all the elements in the array 
for(const item of arr) {
    console.log(item)
}

//________________________________________________________________________________

// Additional Methods: map, filter, reduce, concat, slice, and splice

// 1. map: create a new array by applying call back function to each element 
// 2. forEach: iterate through an array to perform some function without creating a new array
// 3. filter: creates a new array that meets criteria in the call back function
// 4. reduce: iterates through the array to accumulate a single result 
// 5. concat: make a new array by adding two or more arrays together
// 6. slice: extract elements from positions in argument (up to but not including second arg) and make new array
// 7. splice: used to remove, add, or replace elements in the array based on arg given. mutates original array

//__________________________________________________________________________________

// Array: Big-O Time Complexity

// insert/remove from end - O(1) | because when arrays are made, additional room in memory given (double of size)
// insert/remove from beginning - O(n) | have to change position of the rest of the elements
// access - O(1) | where elements are stored in memory is already known
// search - O(n) | have to traverse the array

// push/pop - O(1)
// shift/ unshift/ concat/ slice/ splice - O(n) | change position of elements
// forEach/ map/ filter/ reduce - O(n) | have to traverse whole array to perform its function