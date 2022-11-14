var fare;
var input = require('readline-sync')
var fare = []
var farecopy = []



//Accepting 10 values into an array
console.log("Enter 10 flight fares: ")
for (let i = 0; i < 10; i++) {
    let item = parseFloat( input.question("Enter the fare: "))
    fare.push(item)
    farecopy.push(item)
    
}

// var farecopy = {...fare}

//Code to print ascending order

for (let i = 0; i < fare.length; i++) {
    for (let j = 0; j < fare.length-i-1; j++) {
        if (fare[j]>fare[j+1]) {
            let temp = fare[j+1]
            fare[j+1] = fare[j]
            fare[j] = temp

        }
        
    }
    

}
console.log(`The sorted array in ascending order is: ${fare}`)

process.stdout.write("The sorted array in descending order is: ")
for (let i = fare.length-1; i >=0 ; i--) {
    process.stdout.write(`${fare[i]},`)
}
var flag = 0 
var searchItem = parseFloat(input.question("\nEnter an fair to search: "))
for (let i = 0; i < fare.length; i++) {
    if (fare[i] == searchItem) {
        console.log(`${searchItem} is found at position ${i+1}!`)
        flag = 1
    }
    
}
if (flag == 0) {
    console.log(`${searchItem} is not found! `)
}
// console.log(fare)
// console.log("printing farecopy")
// console.log(farecopy)


//printing max and min element
var max = farecopy[0]
var min = farecopy[0]
for (let i = 1; i < farecopy.length; i++) {
    if (max<farecopy[i]) {
        max = farecopy[i]
    }
    if (min>farecopy[i]) {
        min = farecopy[i]
    }
} 

console.log("Max element is: " + max)
console.log("Min element is: " + min)


    //Duplicate elements

    var dup = []
    for (let i = 0; i < farecopy.length; i++) {
        for (let j = i+1; j < farecopy.length-1; j++) {
            if (farecopy[i] == farecopy[j]) {
                if (dup.length == 0) {
                    dup.push(farecopy[i])
                }
                else{
                    console.log("92 debuging: "+dup)
                    var flag = true
                    dup.forEach((e)=>{
                        if(e == farecopy[i]){
                            flag = false
                        }
                    })
                    if (flag) {
                        dup.push(farecopy[i])
                    }
                    

                }
            }
            
        }
        
        
    }

    console.log("Duplicate elements are: ")
    console.log(dup)