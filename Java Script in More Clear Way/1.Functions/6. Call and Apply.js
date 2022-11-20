

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
    // Here if we re-write whole code then it going to be a lengthy for us.
}


// It become a regular function call
const book = lufthansa.book;
// Does not work
// book(23,'Neelamm'); // Give Undefined

// we call using call method it set this keyword to eurowings or lufthansa according to our given parameter
book.call(eurowings,23,'Neelam');
console.log(eurowings);

// We can manipulate this keyword behavior using this keyword.
book.call(lufthansa,2323,'Vikash');
console.log(lufthansa);


const swiss = {
    airline : 'Swiss Air Lines',
    iataCode:'LX',
    bookings:[]
}

book.call(swiss,583,'Santosh');
console.log(swiss);

// Apply is similar to Call method 
// Apply does not receive list of argument instead it take list of argument.

const flightData = [583,'Pankaj Tripathi'];
book.apply(swiss,flightData);
console.log(swiss);

book.call(swiss ,...flightData);


