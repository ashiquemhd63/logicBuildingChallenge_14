var pass=[]
var input = require('readline-sync')
var newPass = []
var temp = "" 
//Accepting passenger names

for (let i = 0; i < 10; i++) {
    var name = input.question("Enter the passenger name: ")
    pass.push(name)
}
// console.log(pass)


// if(pass[0]>pass[1]){
//     console.log("hello")
// }
// else{
//     console.log("hai")
// }
//Sorting array in assendinding order
for (let i = 0; i < pass.length; i++) {
    for (let j = 0; j < pass.length-i-1; j++) {
        if (pass[j]>pass[j+1]) {
            temp = pass[j+1]
            pass[j+1] = pass[j]
            pass[j] = temp

        }
        
    }
    
}
// console.log(pass)

console.log("1.Sorted in assending order is: \n")
pass.forEach((i)=>{
    process.stdout.write(`${i}, `)
})

console.log("\n2.Sorted in dedcending order: \n ")
for (let i = pass.length-1; i >= 0; i--) {
    process.stdout.write(`${pass[i]}, `)
    
}



//Search 

console.log()
var flag = 0
var searchItem = input.question("Enter name to search: ")
for (let i = 0; i < pass.length; i++) {
    
    if (pass[i] == searchItem) {
        console.log("hello from search loop")
        console.log(`Element found at posation ${i+1}`)
        flag = 1
        break

        
    }

    
}
if (flag == 0) {
    console.log("The name not found! ")
}
// console.log(`flag value is ${flag}`)
// pass.forEach((item,index)=>{
//     if (item == searchItem) {
//         console.log(`Element found at posation ${index+1}`)
//         flag = 1
    
//     }
// })

//Length of elements
console.log("\t Printing names length")
pass.forEach((item)=>{
    process.stdout.write(`${item} => ${item.length}`)
    console.log()
})

//slpitting names
console.log("e.Splitting names")
pass.forEach((i)=> {
    var newPass = i.split(' ')
    newPass.forEach((item)=> {
        process.stdout.write(`${item}, `)
    })
})

//Code to print duplicate elements

for (let i = 0; i < pass.length; i++) {
    for (let j = i; j < pass.length; j++) {
        if (pass[j] == pass[j+1] ) {
            if(!(newPass.includes(pass[j]))){
                console.log("hello")
                newPass.push(pass[j])
            }

        }
        
    }
    
}

console.log("\n Duplicate elements are: ")
console.log(newPass)