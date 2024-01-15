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

const arr = [8, 20, -2, 4, 6]
bubbleSort(arr)
console.log(arr)

//Big-O - O(n^2) quadratic time complexity bc has 2 loops; a for loop inside the while do loop

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