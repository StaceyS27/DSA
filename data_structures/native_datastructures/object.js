// an object is an unordered collection of key-value pairs keys being either a string or symbol data type
// values can be any data type

// creating an object
const obj = {
    name: 'Bruce',
    age: 25,
    "key-three": true,
    sayMyName: function() {              // can also add functions to objects
        console.log(this.name)          // this keyword refers to the obj itseld
    }
}

// can add key value pairs to objects using dot or bracket notation
obj.hobby = 'football'

// delete keyword used to delete a key value pair 
delete obj.hobby

// can access values with either bracket or dot notation
// backet notation mainly used when there are spaces on hyphen in the key
console.log(obj.name)
console.log(obj['age'])
console.log(obj['key-three'])
console.log(obj)
obj.sayMyName()         // call function inside object will result on obj.name --> Bruce

//_______________________________________________________________________________

// object methods: 1.Object.keys() 2. Object.values() 3. Object.entries()

// 1. Object.keys() | returns all keys in the object as an array. can then iterate through the array as needed
myObject = {
    name: 'John',
    age: 25,
    city: 'Example City'
}

const keysArray = Object.keys(myObject)
console.log(keysArray)          // ['name', 'age', 'city']

// 2. Object.values() | returns all the values of an object as an array
const valuesArray = Object.values(myObject)
console.log(valuesArray)        // ['John, 25, 'Example City']

// 3. Object.entries() | returns an array of the object's key value pairs also within individual arrays 
const entriesArray = Object.entries(myObject)
console.log(entriesArray)       // [['name', 'John'], ['age', 25], ['city', 'Example City']]

//__________________________________________________________________________________

// object function and method Big-O time complexity

// insert | O(1) - like arrays with extra space. are arrays under the hood where keys are hased to a number and then divided by number of pairs present. modulo answer determines index of value (?)
// remove | O(1)
// access | O(1)
// search | O(n) - can look for property within object ex: if(keyToSearch in myObject) 'in' being a keyword
// Object.keys() | O(n)
// Object.values() | O(n)
// Object.entries() | O(n)




