// iterative walk method

// walk(5)

// function walk(steps){
//     for(i = 0; i< steps ; i++){
//         console.log("you take a step")
//     }
// }


// recursive

walk(5)

function walk(steps){
    if(steps < 1) return // base case

    console.log("you take a step")

    walk(steps - 1)
}

// factorial with recursive

console.log(factorial(5))

function factorial(num){
    if(num < 1 ) return 1 // base case

    return num * factorial(num - 1) // recursive
}

// finding power of numbers with recursive

console.log(power(2,5))

function power(base, exponent){
    if(exponent < 1) return 1  // base case

    return base * power(base, exponent -1) // recursive case
}
