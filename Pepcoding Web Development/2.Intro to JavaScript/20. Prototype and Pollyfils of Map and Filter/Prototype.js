// Prototype ka use karke ham apne khud ke function implement kar skte hain

// ye ek aisa function banane ka tarika hai jisko banane ke bad ham for eg kisi v array ke sath us function ko use kar sskte hain .'


Array.prototype.myFunction = function(){
    console.log(this);
}

let arr =[1,2,3,4];

arr.myFunction();