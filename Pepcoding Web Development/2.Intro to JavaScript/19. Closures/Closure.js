
// Function Scope
// function calculate(a,b){
//     let result = a+b;
//     return result;

// }

// // Result cannot access outside function
// console.log(calculate(2,3));


// Lexical scope
// ek child function ke pass apne parent function ke andar jitne v variable define kiye ho unka access child function ke pass hota hai ise kahte hain function ka lexical scope
// yehi code closure hai
// A function always bundles with its lexical scope forms a closure.
// Jab ek function ke pass uske lexicall scope ka access hota hai hmesha to isi concept ko ham closure kahte hain.
function add(){
    let a=4;
    function addChild(){
        console.log(a+5);

    }
    return addChild;
}

let catchAdd = add();
console.log(catchAdd);

catchAdd();
