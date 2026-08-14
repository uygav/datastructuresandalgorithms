// Stack ex with array

// functions : push, pop, peek, length

var letters = [] // this is our stack , bc arrays are have all the functions of a stack

var word = "racecar"

var reverseword = ""

// put letters of word into stack
for (var i = 0; i< word.length; i++){
    letters.push(word[i])
}

// pop off the stack in reverse order
for (var i=0; i< word.length; i++){
    reverseword += letters.pop()
}

if(reverseword === word){
    console.log(word + "is a palindrome")
}
else{
    console.log(word + "is not a palindrome")
}






// create a stack

var Stack = function(){
    this.count = 0
    this.storage = {}

    //adds a value onto the end of the stack
    this.push = function(value){
        this.storage[this.count] = value
        this.count++ 
    }

    // removes and returns the value at the end of the stack
    this.pop = function(){
        if(this.count === 0 ){
            return undefined
        }

        this.count--
        var result = this.storage[this.count]
        delete this.storage[this.count]
        return result;
    }

    this.size = function(){
        return this.count
    }

    // returns the value at the end of the stack
    this.peek = function(){
        return this.storage[this.count-1]
    }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
