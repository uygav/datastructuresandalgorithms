// Hashtables, HashMaps , Sets

// testte collision muhabetini yap, 
// collisionu nasıl önleriz ?
// hangi durumlarda o(n) oluyor hangi durumlarda o(1) 
// ve bu durumlar (bigO) collisiona mı bağlı ?

var hash = (string, max)=>{ // max is the number of buckets that we're using in our hash table to store values
    var hash = 0

    for (var i = 0; i< string.length; i++){
        hash += string.charCodeAt(i)
    }

    return hash % max 
    // we divide by number of buckets, for ex if we had give buckets , remainder will be 0 1 2 3 4 , 
    // and than that would be index that we're going to place the item into the array 
}

let HashTable = function(){
    let storage = [] // this is where we're gonna store all the data
    const storageLimit = 4 // number of buckets in the array

    this.print = function(){ 
        console.log(storage)
    }

    this.add = function(key,value){
        var index = hash(key,storageLimit)
        if(storage[index] === undefined){
            storage[index] = [
                [key,value]
            ]
        }
        else{
            var inserted = false;
            for(var i = 0; i<storage[index].length; i++){
                if(storage[index][i][0] === key){
                    storage[index][i][1] = value
                    inserted = true
                }
            }
            if(inserted === false){
                storage[index].push([key, value]) // thats why we will get multiple entries into one bucket
            }
        }
    }

    this.remove = function(key){
        var index = hash(key, storageLimit)
        if(storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index][i]
        }else{
            for(var i=0; i< storage[index]; i++){
                if(storage[index][i][0] === key){
                    delete storage[index][i]
                }
            }
        }
    }
    this.lookup = function(key){
        var index = hash(key, storageLimit)
        if(storage[index] === undefined){
            return undefined
        }else{
            for(var i=0; i<storage[index].length; i++){
                if(storage[index][i][0] === key){
                    return storage[index][i][1]
                }  
            }
        }
    }
}

console.log(hash('uygar',10)) // youll see the index showing which bucket the word uygar will be in 

let ht = new HashTable()
ht.add('uygar', 'person')
ht.add('karabas', 'dog')
ht.add('rex', 'dinosaur')
ht.add('duman', 'cat')

console.log(ht.lookup('tux'))
ht.print()

// there is collision, 
// so you can change the number of storageLimit = more than 4 , 
// youll see there is no collision


