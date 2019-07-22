const square = function(n){
    return n*n;
}
// arrow funcitons
const squar = (n) => {
    return n*n;
}
const sqr = (n) => n*n;


// console.log(square(93));
// console.log(squar(93));
// console.log(sqr(93));

const event = {
    name: "party",
    guests: ["Akshay","Joey","Ross"],
    //here u cant change this function to arrow function. 
    // arrow function can't work with 'this' objects
    // arraow function dont bind it's own this value
    guestList: function(){
        console.log("Guest list for "+ this.name);

        this.guests.forEach((guest) => {
            console.log(guest +" is attending "+this.name);
        });
    },
    // but can use it like this
    eventName() {
        console.log("Guest list with menber funciton");
    }
    
}

event.guestList();
event.eventName();