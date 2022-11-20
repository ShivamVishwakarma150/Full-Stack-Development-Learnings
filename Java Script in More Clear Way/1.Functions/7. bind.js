// It also allows to manually set this keyword for any functional call bind is not immediately call the function instead it return a new function where this keyword bound with that this keyword.


const lufthansa = {
    airline : 'Lufthansa',
    iataCode : 'LH',
    bookings :[],
    // book :function(){}
    book(flightNum,name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight:` ${this.iataCode}${flightNum}`,name});
    },
};

lufthansa.book(239,'Shivam Vishwakarma');
lufthansa.book(2349,'Prahsant kumar');
console.log(lufthansa);



const eurowings = {
    airline : 'Eurowings',
    iataCode : 'EW',
    bookings :[],
}


// It become a regular function call
const book = lufthansa.book;
// Does not work
// book(23,'Neelamm'); // Give Undefined

book.call(eurowings,23,'Neelam');
console.log(eurowings);

book.call(lufthansa,2323,'Vikash');
console.log(lufthansa);


const swiss = {
    airline : 'Swiss Air Lines',
    iataCode:'LX',
    bookings:[]
}

book.call(swiss,583,'Santosh');
console.log(swiss);

const flightData = [583,'Pankaj Tripathi'];
book.apply(swiss,flightData);
console.log(swiss);

book.call(swiss ,...flightData);


// Bind Method

const bookEW = book.bind(eurowings);
// bookEW(233,'Steven');
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

// console.log(eurowings);

// bookEW23 function flightNum set to 23 rest we have to pass to bookEW23 method
const bookEW23 = book.bind(eurowings,23);
bookEW23('Shivam Vishwakarma');
bookEW23('Neelam Yadav');

// With Event Listeners
