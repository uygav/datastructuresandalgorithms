// QUEUE - FIFO

function Queue(){
    collection = []
    
    this.print = function(){
        console.log(collection)
    }

    this.enqueue = function(element){
        collection.push(element)
    }

    this.dequeue = function(){
        return collection.shift()
    }

    this.front = function(){
        return collection[0]
    }

    this.size = function(){
        return collection.length
    }

    this.isEmpty = function(){
        return (collection.length === 0)
    }
}


var q = new Queue()

q.enqueue('a')
q.enqueue('b')
q.enqueue('c')
q.print()
q.dequeue()
console.log(q.front())
q.print()


// priority queues

// order doesnt matter, priority matters . 
// ex: In the emergency room, it's not first come, first served — the most critical patient is seen first.
// if all priprties are the same number, its gonna behave just like a normal queue



function PriorityQueue(){

    var collection = []

    this.printCollection = function(){
        (console.log(collection))
    }
    
    this.enqueue = function(element){
        if(this.isEmpty()){
            collection.push(element)
        }
        else{
            var added = false 
            for (var i = 0; i< collection.length; i++){
                if(element[1] < colelction[i][1]){ // checking priorties, first index is the priority
                    collection.splice(i, 0, element)
                    added = true
                    break;
                }
            }
            if(!added){
                collection.push(element)
            }
        }
    }

    this.dequeue = function(){
        var value = collection.shift()
        return value[0]
    }

    this.front = function(){
        return collection[0]
    }

    this.size = function(){
        return collection.length
    }

    this.isEmpty = function(){
        return (collection.length === 0)
    }

}


var pq = new PriorityQueue();
pq.enqueue(['second', 2]); 
// first element in the array is the item we want to put onto the priority q
// second element is the priority number
pq.enqueue(['third', 3]);
pq.enqueue(['first', 1]);
pq.enqueue(['uygar', 2])
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();

