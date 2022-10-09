// first install pdf-lib
// npm install pdf-lib
// node 14.firstWirtingPDF.js --source=teams.json --dest=root


let minimist=require("minimist");
let fs=require("fs");
let path=require("path");
let pdf=require("pdf-lib");

let args=minimist(process.argv);

let teamsJSON=fs.readFileSync(args.source,"utf-8");
// teams ka object hamko array me mil jayega
let teams=JSON.parse(teamsJSON);

for(let i=0;i<teams.length;i++){
    // Each team ka folder path mil jayega
    // eg: root\india
    let teamFN=path.join(args.dest,teams[i].name);

    for(let j=0;j<teams[i].matches.length;j++){
        // isase file ka name mil jayega
        // root\India\Australia.pdf
        let fileName=path.join(teamFolder,teams[i].matches[j].vs+". pdf");
        // console.log(fileName);
        
        // corresponding team ke name ka pdf ban jayega
        // root\India\Australia.pdf
        // fs.writeFileSync(fileName,"","utf-8");

        // Har team ke liye folder ban chuka hai
        // Harek folder ke andar jana hai aur har match ke liye pdf likhna hai
        createScoreCard(teams[i].name,teams[i].matches[j],fileName);
        
    }

}

function createScoreCard(teamName,match,matchFileName){
// This fun creates pdf for match in appropriate folder with correct details.
// Here we will use pdf-lib to create the pdf

}