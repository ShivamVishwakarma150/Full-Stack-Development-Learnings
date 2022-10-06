let singleQuotes='single quotes ki string ';
let doubleQuotes = "double quotes ki string";
console.log(singleQuotes);
console.log(doubleQuotes);

let char=singleQuotes.charAt(4);
console.log(char);

let ascii=singleQuotes.charCodeAt(4);
console.log(ascii);

let subStr=singleQuotes.substring(2,8);
console.log(subStr);

// it split it and send array after splitting it
let arrStr=singleQuotes.split("i");
console.log(arrStr);

let str=arrStr.join("$");
console.log(str);

// str.trim() aage aur piche ke whitespaces ko remove karta hai.
let quotes="    Shivam     ";
let nQuotes=quotes.trim();
console.log(nQuotes);