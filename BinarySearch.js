// Binary Search

const array = new Array(100);

const target = 42

for(let i=0; i<array.length; i++){
    array[i] = i
}

const index = binarySearch(array, target);
console.log(index)

if (index == -1){
    console.log(target + "not found")
}
else{
    console.log("element found at: " + index)
}


function binarySearch(array,target){
    let low = 0
    let high = array.length -1

    while(low <= high){
        let middle = Math.floor(low + (high - low) / 2)
        let value = array[middle]


        console.log("middle: " + value)

        if(value < target) low = middle + 1
        else if(value > target) high = middle - 1
        else return middle; // target found
    }

    
    
    return -1 // target not found
}
