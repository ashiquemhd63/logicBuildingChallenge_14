var input = require('readline-sync')

var age = []
var type = []
const dateToday =new Date()

for (let i = 0; i < 10; i++) {

    var date = new Date(input.question("Enter the dob: "))
    var year = dateToday.getFullYear() - date.getFullYear()
    age.push(year)
    
}
// console.log(age)

age.forEach((age)=>{
    if (age<10) {
        type.push("kid")
    }
    else if (age >= 10 && age < 30) {
        type.push("youth")

    }
    else if (age >= 30 && age < 60) {
        type.push("adult")

    }
    else{
        type.push("older")
    }

})
console.log(`  AGE  TYPE`)
for (let i = 0; i < age.length; i++) {
    console.log(`${age[i]} => ${type[i]}`)
    
}