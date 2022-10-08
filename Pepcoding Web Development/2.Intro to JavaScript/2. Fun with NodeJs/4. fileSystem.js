//file system
// files -> create,read,update,delete
// open -w -> create
// writefileSync -> read
// appendFileSync -> update
// unlinkSync -> delete

let fs=require("fs");



// let buffer=fs.readFileSync("abc.js"); // data reads in binary mode by default
// console.log("Data is "+buffer);


// fs.openSync("abc.txt","w"); // for making a file

// no file -> create a new file  exist->content replace by new text
// fs.writeFileSync("abc.txt","Hum ajj khus hain");

//update
// fs.appendFileSync("abc.txt","\nBahai khus kyu nahi hai");



// folders(directory) -> create,read,update,delete
// mkdirSync -> create
// readdirSync -> read
// rmdirSync -> delete




// For making directory
// fs.mkdirSync("meriDirectory");

// fs.writeFileSync("meriDirectory/meriFile.txt","Mera file accha hai");
// let content=fs.readdirSync("meriDirectory"); // provide directories of meriDirectory all files/folders inside meridirectory in the form of array
// console.log(content);
// for(let i=0;i<content.length;i++){
//     console.log("file ",content[i]+" is removed");
//     fs.unlinkSync("meriDirectory/"+content[i]);
// }

// for removing the folders
// fs.rmdirSync("meriDirectory");

// fs.existSync -> if a file exist at a path -> true else --> false

// let doesPathexist = fs.existsSync("abc.txt");
// console.log(doesPathexist);
// doesPathexist=fs.existsSync("abcd.txt");
// console.log(doesPathexist);

// fs.lstatSync -> fs.lstatSync
// let detailsObj=fs.lstatSync(__dirname+"\\4. fileSystem.js");
// let ans=detailsObj.isFile();
// console.log(ans);
// ans=detailsObj.isDirectory();
// console.log(ans);


for(let i=1;i<=10;i++){
    let dirPathToMake=`Lecture - ${i}`;
    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(dirPathToMake+"\\"+"readme.md",`# readme for ${dirPathToMake}`);
}

