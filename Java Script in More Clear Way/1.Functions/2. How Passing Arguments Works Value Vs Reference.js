// Lecture : How Passing arguments works : Value Vs Reference


const flight = 'LH234';

const shivam ={
    name :'Shivam Vishwakarma',
    passport : 324345443245435,

}


// Here flightNum is passedBy Value and passenger is passed by reference because flightNum is primitive type and passenger is reference type variable

const checkIn = function(flightNum,passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr. '+passenger.name;

    if(passenger.passport ===324345443245435 ){
        console.log('Check In');
    }else{
        console.log('Wrong Passport!');
    }
}


checkIn(flight,shivam);
console.log(flight);
console.log(shivam);

// Is the same as doing..
// const flighNum =flight; // primitive
// const passenger = shivam; // reference type


const newPassport = function(person){
    person.passport = Math.trunc(Math.random()*10000000000);


}

newPassport(shivam);
console.log(shivam);
checkIn(flight,shivam);