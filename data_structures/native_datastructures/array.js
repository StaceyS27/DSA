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

// additional methods: map, filter, reduce, concat, slice, and splice
// 1. map: create a new array by applying call back function to each element 
// 2. forEach: iterate through an array to perform some function without creating a new array
// 3. filter: creates a new array that meets criteria in the call back function
// 4. reduce: iterates through the array to accumulate a single result 
// 5. concat: make a new array by adding two or more arrays together
// 6. slice: extract elements from positions in argument (up to but not including second arg) and make new array
// 7. splice: used to 
