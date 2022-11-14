var input = require('readline-sync')


var passenger = {
    name : ' ',
    total_miles : 0,
    flyer_points : 0

}

 passenger.name = input.question("Enter the name: ") 
 passenger.total_miles = parseFloat(input.question("Enter the total miles: "))
 console.log(passenger.name)
 if(passenger.total_miles >= 10000 && passenger.total_miles < 20000){
    passenger.flyer_points = 10
 }

 else if(passenger.total_miles >= 20000 && passenger.total_miles < 50000){
    passenger.flyer_points = 20
 }

 else if(passenger.total_miles >= 50000 && passenger.total_miles < 100000){
    passenger.flyer_points = 30
 }
 else if(passenger.total_miles > 100000){
    passenger.total_miles = 50
 }
 console.log("Flyer points")
 console.log(passenger)