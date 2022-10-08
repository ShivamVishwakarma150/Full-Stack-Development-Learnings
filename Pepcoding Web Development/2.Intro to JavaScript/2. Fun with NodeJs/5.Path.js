let path=require("path");
// for(let i=1;i<=10;i++){
//     let dirPathToMake=`Lecture - ${i}`;
//     fs.mkdirSync(dirPathToMake);
//     fs.writeFileSync(path.join(dirPathToMake,"readme.md"),`# readme for ${dirPathToMake}`);
// }

let ext=path.extname(path.join(__dirname,"abc.js")); //to find extension of a particular file
console.log("ext",ext);
let name=path.basename(__dirname); // only name of file without extension
console.log(name);
name=path.basename(path.join(__dirname,"abc.js")); //file name with extension it provide
console.log(name);