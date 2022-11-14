var input = require('readline-sync')

var passengerName = []
var destination= []

var noOfPass = input.question("Enter the number of passengers: ")
for (let i = 0; i < noOfPass; i++) {
    var name = input.question("Enter the passenger name: ")
    passengerName.push(name)
    var dest = input.question("Enter the destination: ")
    destination.push(dest)

    
}
//merging two arrays
console.log("Merged array is: ")
destination.forEach((item)=>{
    passengerName.push(item)
})
console.log(passengerName)