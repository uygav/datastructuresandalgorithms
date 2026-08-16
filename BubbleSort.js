// bubble sort = pairs of adjacent elements are compared,
// and the elements swapped if they are not in order

// quadratic time O(n^2)
// small data set = okay-ish
// large data set = bad


const array = [9, 1, 8, 2, 7, 3, 6, 4, 5]

bubbleSort(array)

function bubbleSort(array){
    for(i = 0; i < array.length-1 ; i++){
        for(j = 0; j< array.length - i - 1; j++){
            if(array[j] > array[j + 1]){
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
}

console.log(array)