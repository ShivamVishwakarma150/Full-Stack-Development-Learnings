'use strict';

const bookings  = [];

const createBooking = function(flightNum , numPass=1,price=199*numPass){
    // Let sat we want no of passenger is 1 by default and price by 199

    // ES6 
    // function(flightNum , numPass=1,price=199*numPass)


    // ES5
    // numPass = numPass || 1;
    // price = price || 199;

    const booking={
        flightNum,
        numPass,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123'); // numPass, price is undefined

// function(flighNum , numPass=1,price=199*numPass) // Now it works dynamically
createBooking('LH123',2);

// NOTE:- We cannot skip parameters here
// createBooking('LH123',1000); // Wrong way
// createBooking('LH123',undefined,1000); // Correct way
