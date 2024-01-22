// a map is an ordered collection of key-value pairs 
// both keys and values can be of any data type 
// are iterable - can use with a for of loop

// object vs map
//  1. objects are unordered whereas maps are ordered
//  2. keys in objects can only be a string or symbol whereas in map, can be any type
//  3. an object has a prototype that contains keys that may collide with one's own. map does not have any keys by default
//  4. objects are not iterables whereas maps are
//  5. maps can only store data whereas objects can have functionality (ex: functions?)

//______________________________________________________________________________________________

const map = new Map([['a', 1], ['b', 2]])       // use map constructor to make a new map. accepts one array with array as elements as arguments

map.set('c', 3)     //set method to add these key value pairs to map
map.delete('c') 

console.log(map.has('a'))       // will output true because 'has' method checks if specific key exists in the map

console.log(map.size)       // expect 2 

//map.clear()     // now no key value pairs from below in the console 

for(const [key, value] of map) {
    console.log(`${key}: ${value}`)
}

console.log(map) // Map(2) {'a' => 1, 'b' => 2}