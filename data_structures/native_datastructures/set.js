// a set is a data structure that can hold a collection of unique values
// can contain a mic of data types ex: strings, booleans, numbers, objects etc
// are iterables - can use for of loop 

// Set vs Array 
// 1. arrays can contains duplicate values whereas sets cannot 
// 2. searching and deleting an element in a set faster than arrays 
        // bc array values correspont to an index and need to iterate through it (?)
        // also no duplicates present 
        // in arrays if deleting elements and adding elements have to change index of other elements, increasing time complexity O(n) (like in splice) ? 

//________________________________________________________________________________

const set = new Set([1, 2, 3])      // set constructor, accepts array as an argument

set.add(4)      // add method to add values to the set
set.add(4)      // if try to add 4 again, it is ignored (sets only have unique values )

console.log(set.has(4))     // has method check if set has a vlaue | will log true 

set.delete(3)       // delete a value from the set

console.log(set)    // a set looks like this | Set(4) {1, 2, 3, 4}

console.log(set.size)      // see size of set 

set.clear()     //  method to clear all values in set

for(const item of set) {            // iterating through the set to view values
    console.log(item)
}

