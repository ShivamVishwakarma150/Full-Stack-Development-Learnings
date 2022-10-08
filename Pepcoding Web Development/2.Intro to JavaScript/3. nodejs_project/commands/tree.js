let fs=require("fs");
let path=require("path");
function treeFn(dirPath) {
    // let destPath;
    if (dirPath == undefined) {

        treeHelper(process.cwd(), "");
        return;
    } else {
        let doesExist = fs.existsSync(dirPath);
        if (doesExist) {
            treeHelper(dirPath, "");
        } else {

            console.log("Kindly enter the correct path");
            return;
        }
    }
}

function treeHelper(dirPath, indent) {
    // is file or folder
    let isFile = fs.lstatSync(dirPath).isFile();
    if (isFile == true) {
        let fileName = path.basename(dirPath);
        console.log(indent + "├──" + fileName);
    } else {
        let dirName = path.basename(dirPath)
        console.log(indent + "└──" + dirName);
        //give all children's of folders
        let childrens = fs.readdirSync(dirPath);
        for (let i = 0; i < childrens.length; i++) {
            // path for each children
            let childPath = path.join(dirPath, childrens[i]);
            // then again call treeHelper recursively for printing its descendent's files and folders.
            treeHelper(childPath, indent + "\t");
        }
    }


}
module.exports = {
    treeKey: treeFn
}