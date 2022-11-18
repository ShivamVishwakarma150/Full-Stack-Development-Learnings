// Demo of HOF

const oneWord = function(str){
    return str.replace(/ /g,'').toLowerCase();
}

const upperFirstWord = function (str){
    const [first,...others]=str.split(' ');

    return [first.toUpperCase(),...others].join(' ');

}


// It is HOF
const transformer = function (str,fn){
    console.log(`Original String: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best',upperFirstWord);
transformer('JavaScript is the best',oneWord);


// JS uses callbacks all the time
/// // Work in Browser
// const high5 = function(){
//     console.log('👌👌');
// }

// document.body.addEventListener('click',high5);