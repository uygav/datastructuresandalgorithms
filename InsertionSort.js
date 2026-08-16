// insertion sort

// iskambil kağıtlarını rasgele hepsini yan yana koyup sonra sıralamak gibi

// insertion sort = after comparing elements to the left 
// shift elements to the right to make room to insert a value

// quatratic time O(n^2)
// small data set = decent
// large data set = bad 

// less steps than bubble sort , 
// best case in O(n) compared to selection sort

const array = [9, 1, 8, 2, 7, 3, 6, 5, 4]

insertionSort(array)

console.log(array)


function insertionSort(array){

    for(i = 1; i < array.length; i++){ // i=1 bc we start the compare with index 1 
        let temp = array[i]
        let j = i -1 // j = prev index

        while(j >= 0 && array[j] > temp){
            array[j+1] = array[j]
            j--
        }
        array[j+1] = temp

    }

}