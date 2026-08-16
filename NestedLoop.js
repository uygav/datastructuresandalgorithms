// nested loops

let a = "#"

for (let i = 0; i < 6; i++){
    for (let j = 0; j < 6; j++){
        process.stdout.write(a)
    }
    process.stdout.write("\n")
}

for (let i = 1; i <= 5; i++){
    let row = ""
    for (let j = 1; j <= 5; j++){
        row += (i * j) + "\t"
    }
    console.log(row)
}


///////////////

let array = [5 , 2 , 8 , 4 , 7 , 9 , 1]

let temp = array[0] // 5

array[0] = array[1]

array[1] = temp

console.log(array)
