let fs=require("fs");
let path=require("path");
function organizeFn(dirPath) {
    // console.log("organize command implemnted for ", dirPath);
    // 1. input -> directory path given
    let destPath;
    if (dirPath == undefined) {
        destPath = process.cwd();
        return;
    } else {
        let doesExist = fs.existsSync(dirPath);
        if (doesExist) {

            // 2. create -> organized_files -> directory
            destPath = path.join(dirPath, "organized_files");
            // agar path exist nhi karta tbhi new directory banegi
            if (fs.existsSync(destPath) == false) {
                fs.mkdirSync(destPath);
            }

        } else {

            console.log("Kindly enter the correct path");
            return;
        }
    }
    organizeHelper(dirPath, destPath);
    // 3. identify categories of all the files present in that input directory  ->
}
types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
function organizeHelper(src, dest) {
    // 3. identify categories of all the files present in that input directory  ->

    // sare files ka names array me mil jayega    
    let childNames = fs.readdirSync(src);
    // console.log(childNames);

    //
    for (let i = 0; i < childNames.length; i++) {
        // har file ka address/path mil jayega proper
        let childAddress = path.join(src, childNames[i]);

        //cheak if it is file or folder
        let isFile = fs.lstatSync(childAddress).isFile();

        //agar ye file hai
        if (isFile) {
            // console.log(childNames[i]);
            // file ko se category se belong karta hai
            let category = getCategory(childNames[i]);
            console.log(childNames[i], "belongs to --> ", category);
            // 4. copy / cut  files to that organized directory inside of any of category folder 
            sendFiles(childAddress, dest, category);
        }
    }
}
function sendFiles(srcFilePath, dest, category) {
    // make new path using dest+category 
    let categoryPath = path.join(dest, category);
    if (fs.existsSync(categoryPath) == false) {
        fs.mkdirSync(categoryPath);
    }
    // isase only file ka name mil jayega
    let fileName = path.basename(srcFilePath);
    //new path jaha file copy karna hai in an organized way
    let destFilePath = path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    fs.unlinkSync(srcFilePath);
    console.log(fileName, "copied to ", category);

}
function getCategory(name) {
    let ext = path.extname(name);
    ext = ext.slice(1);
    // iterate in utility.types
    for (let type in types) {
        let cTypeArray = types[type];
        for (let i = 0; i < cTypeArray.length; i++) {
            if (ext == cTypeArray[i]) {
                return type;
            }
        }
    }
    return "others";
}
module.exports = {
    organizeKey: organizeFn
}