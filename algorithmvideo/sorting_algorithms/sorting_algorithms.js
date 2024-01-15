//______________________Bubble Sort_______________________
//named this way bc higher values are eventually "bubbled" to the top

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