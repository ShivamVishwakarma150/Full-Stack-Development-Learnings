// Functional programming always suggest that always we have to make immutable code in functional programming

const person1 ={
    name:'Adam',
    Age:25
}

// const person2 = person1; // ye bs same reference ko assign kr dega

// Method 1
// const person2 = Object.assign({},person1); // It is used to make person2 using person1 and give new reference to it.

// Method2 using spread operator for  making it deep copy
const person2 = {...person1};

person2.name="Steve";// Due to this dono references me data change ho jayega kyuki ye reference data type hai ( object )


console.log(person1);
console.log(person2);