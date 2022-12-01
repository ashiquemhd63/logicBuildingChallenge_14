var input = require('readline-sync')


var alphabet = input.question("Enter the alphabet :")
for (let i = 101; i <= 109; i+=2) {
    process.stdout.write(`${alphabet}${i} `)

    
}
console.log()
for (let i = 100; i <= 110; i+=2) {
    process.stdout.write(`${alphabet}${i} `)

    
}
console.log() 

//Code for prime number

console.log("First 10 prime numbers: ")
var count = 0
var isPrime = true
for (let i = 2; i < 100; i++) {
     for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false
        }     
     }
     if (isPrime) {
        process.stdout.write("Q"+ i +" ")
        count++
        
     }
     else{
        isPrime = true
     }
     if (count == 10) {
        break
     }
}
console.log()

//fibonacci number

var first = 0
var second = 1
var count =1
process.stdout.write(`${first} ${second}`)
while (count <= 10) {
   var third= first + second
   process.stdout.write(` ${third} `)
   first = second
   second = third
   count++
}