var input  = require('readline-sync')

var fares = []
var destination = []

var limit = parseInt(input.question("Enter the limit: "))

for (let i = 0; i < limit; i++) {
    // console.log(`Enter the ${i+1}th fare: `)
    var fare = input.question(`Enter the ${i+1}th fare: `)
    fares.push(fare)
    var dest = input.question(`Enter the ${i+1}th destination: `)
    destination.push(dest)
    
}
var out = parseInt(input.question("Enter the position: "))

console.log(`${out}th fare is ${fares[out-1]}`)
console.log(`${out}th destination is ${destination[out-1]}`)


