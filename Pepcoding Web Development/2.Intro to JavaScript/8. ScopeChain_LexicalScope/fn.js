console.log("line number 1", varName);
var varName = 10;
// fn b definition
function b() {
    console.log("line number 5", varName);
}
console.log("line number 7", varName);
function fn() {
    console.log("line number 9", varName);
    var varName = 20;
    // from fn
    b();
    console.log("line number 13",varName);
}
fn();



// Function ke liye b ek alag se context bangea usko execution context bolte hain.

// SCOPE :- Area where a function or a variable can be found.

// Lexical Scoping : Jab ham ek function me rhakar outside of current function se ek function call karte hai jiska definition outside to the function hai tb lexical scoping comes into the picture.

/* eg:
    let varName=10;
    function b(){
        clg(varName);
    }
    fn(){
        let varName=20;
        b();
    }

    O/P : 10 Ayega
*/

