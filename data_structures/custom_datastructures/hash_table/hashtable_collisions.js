// same class with some changes to the method codes to handle collisions. changes to:
    // 1. set
    // 2. get 

// in a collision, instead of just replacing the value at an index even though the keys were not the same, but mapped to the same index,
// the hashmap is implemented so that there is a bucket at each index, if it has elements in it
// visual representation: 1 => [[key, value], .. ]
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
            bucket = [[key, value]]                                              // the bucket variable will now be a larger array that will take in subarrays as elements 
        } else {                                                                 // if there is a bucket array associated with that index            
            const sameKeyItem = bucket.find(item => item[0] === key)            // look in the larger array to see if there is any item(subarray) at position 0 with the same key | [[0,1], [0,1]]
            if(sameKeyItem){                                                    // find method returns element (subarray) that meets criteria = samekeyitem
                sameKeyItem[1] = value                                          // samekeyitem with subarray [0,1] value is updated to reflect new value passed with key
            } else {                                                            // if there is no subarray with the same key as the one to be set, push new key-value pair 
                bucket.push([key, value])
            }
        }
    }                       

    get(key) {                                  // method to get the value given a key
        const index = this.hash(key)            // bc the value is stored in the array with an association to an index, first hash the key to an index
        return this.table[index]                // then access the value given that index
    }

    remove(key){
        const index = this.hash(key)            // hash the key, find it in the hashtable/array and make its new value undefined 
        this.table[index] = undefined
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
table.display()         // 1  25
                        // 17 Bruce      
                        
console.log(table.get("name"))          // Bruce | get the value at the key "name"

table.remove("name")                
table.display()                     // 1 25 | name, bruce removed 

// if instead of remove, we kept name and bruce and then try to call the set function with "mane" and "clark",
// would cause a collision bc name and mane have the same letters and would therefore map to the same index: 17
// have to write code to handle collision 


