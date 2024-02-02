// same class with some changes to the method codes to handle collisions. changes to:
    // 1. set
    // 2. get 
    // 3. remove 

// in a collision, instead of just replacing the value at an index even though the keys were not the same, but mapped to the same index,
// the hashmap is implemented so that there is a bucket at each index, if it has elements in it
// visual representation: 1(index) => [[key, value], .. ] <----- hash table 
// each index has an array (bucket) that has subarrays inside of it with key-value pairs
// however, if a key is already present, the value is just updated (see set method below)


class HashTable {                           // create new class hash table 
    constructor(size) {                     // takes in size as a parameter when creating new instance
        this.table = new Array(size)        // size refers to size of the array, which is the underlying data structure 
        this.size = size                    // storing size passed in in 'this.size' property/('global variable'?)
    }

    hash(key) {                                 // hashtable method that converts string keys to numerical indices to be inserted into an array
        let total = 0
        for(let i=0; i<key.length; i++) {       // loops through the key and adds integer assigned at each character to total variable 
            total += key.charCodeAt(i)
        }
        return total % this.size                // total variable is then divided by size of array & modulo is the index assigned to that key
    }                                           // use of modulo ensures index is between 0 and size -1 (not larger than the array)

    set(key, value){                                                           // method to add new key-value pair 
        const index = this.hash(key)                                            // key hashed to an index
        const bucket = this.table[index]                                        // putting the value space at that index in a variable 
        if(!bucket) {                                                            // if there is no bucket array,
            this.table[index] = [[key, value]]                                              // the bucket variable will now be a larger array that will take in subarrays as elements | this.table[index] = [the array w subarry] need to assign the value/array to the hash table directly 
        } else {                                                                 // if there is a bucket array associated with that index            
            const sameKeyItem = bucket.find(item => item[0] === key)            // look in the larger array to see if there is any item(subarray) at position 0 with the same key | [[0,1], [0,1]]
            if(sameKeyItem){                                                    // find method returns element (subarray) that meets criteria = samekeyitem
                sameKeyItem[1] = value                                          // samekeyitem with subarray [0,1] value is updated to reflect new value passed with key
            } else {                                                            // if there is no subarray with the same key as the one to be set, push new key-value pair 
                bucket.push([key, value])
            }
        }
    }                       

    get(key) {                                                          // method to get the value given a key
       const index = this.hash(key)                                     // hash the key to an index to find the associated bucket/array in the hash table 
       const bucket = this.table[index]
       if(bucket) {                                                     // if there is a bucket, find a subarray that has at position 0 the same key liked the one passed in the method            
        const sameKeyItem = bucket.find(item => item[0] === key)
        if(sameKeyItem){                                                // if subarray with same key found, return what is in the 1st position, the value 
            return sameKeyItem[1]
        }
       }
       return undefined                                                 // otherwise, if no bucket at the index or key not found, return undefined
    }

    remove(key){                                                         // method remove a key-value pair
        const index = this.hash(key) 
        const bucket = this.table[index]                                                                        
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key)      // return the first subarray whose first index equals the key 
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem), 1)           // splice method: arr.splice(start, deletecount, item1, item2) - saying to delete 1 at the index where the subarray key equals key passed to method 
            }                                                           // start: the index to start changing the array | deletecount: # of elements to remove from the array | item1 etc: elements to add at the 'start' index 
        }           
    }

    display() {                                             // method to display key value pairs in the hash table
        for(let i=0; i < this.table.length; i++){           // iterate through the hash table implemented as an array 
            if(this.table[i]){                              // if there is a key-value pair found at that index .. 
                console.log(i, this.table[i])               // print key and value 
            }                                               // hash map may have empty indices due to the hashing method, all index may not be used 
        }
    }
}

//__________________________________________________________________________________________________________________________

// Testing methods 

const table = new HashTable(50)     // table is new instance of hashtable class 

table.set("name", "Bruce")
table.set("age", 25)
table.display()         // 1  25                                                            | collison method: 1 [['age', 25]]
                        // 17 Bruce                                                             17 [['name', 'Bruce']]
                        
console.log(table.get("name"))          // Bruce | get the value at the key "name" |   Collions:  'Bruce'

table.remove("name")                                                          // collison methods: 1[['age', 25]]
table.display()                     // 1 25 | name, bruce removed               |                  17 []     <--- removed name, Bruce

table.set("name", "Bruce")
table.set("mane", 'Clark')
table.display()                 // collision method: 17 [['name', 'Bruce'], ['mane', 'Clark]] - both keys map to index 17 but now added to larger array as seperate subarrays bc not the same key 

// if instead of remove, we kept name and bruce and then try to call the set function with "mane" and "clark",
// would cause a collision bc name and mane have the same letters and would therefore map to the same index: 17
// have to write code to handle collision 

//___________________________________________________________________________________________________________________________

// Time Complexity

// get, set, and remove methods have a find method within them 
// so can have time complexity of o(n)
// but having to find and look through the "bucket" array only happens when hashing functions arent great
// and multiple keys hash to the same index 
// if the hashing is good, will not have any collisions so wont need to use the find method to look for the key value pair and perform set, get, or remove
// instead can use methods implemented on 'hashtable implementation' file, which just use the index to look up values 


