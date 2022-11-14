var input = require('readline-sync')

var limit = input.question("Enter the limit: ")
var fare =[]
for (let i = 0; i < (limit*2); i++) {
    
    if(i % 2 == 0){
        var value = input.question("Enter the fare: ")
        fare[i] = value
    }
    else{
        fare[i] = ' '
    }
    
}


console.log(fare)