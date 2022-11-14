//queston 2

var input = require('readline-sync')
var hour;

var time =  input.question("Enter the time(HH:MM)(AM/PM): ")
var fare = parseInt(input.question("Enter the fare: "))

temp = time[time.length-2]
if (temp == 'P' || temp == 'p') {
    hour = parseInt(time[0]+time[1]) 
    hour += 12
    // console.log(hour)
}
else{
    hour = parseInt(time[0]+time[1])
}
if (hour >= 6 && hour < 9) {
    fare += fare*.1
    console.log("fare increased to: "+fare)
}
else if(hour >= 9 && hour < 17){
    fare += fare*.2
    console.log("fare increased to: "+fare)

}
else if (hour >= 17 && hour <23) {
    fare += fare*.07
    console.log("fare increased to: "+fare)

}
else if (  hour >= 23 || hour < 6) {
    fare += fare*0.05
    console.log("fare increased to: "+fare)

}


