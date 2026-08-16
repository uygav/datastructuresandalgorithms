// öncesinde min'i arıyoruz, 
// sonrasında arrayin sıradaki kısmını temp yapıp min ile tempin yerini değiştiriyoruz

// selection sort = search through an array and keep track of the minimum value during each iteration.
// at the end of each iteration , we swap variables


const array = [8, 7 , 9 , 2 , 3 , 1 , 5 , 4 ,6]

selectionSort(array)


function selectionSort(array){
    for(i = 0; i < array.length-1 ; i++){
        
        let min = i
        
        for(j = i + 1; j< array.length; j++){
            if(array[min] > array[j] ){
                min = j
            }
        }

        let temp = array[i]
        array[i] = array[min]
        array[min]= temp

    }
}