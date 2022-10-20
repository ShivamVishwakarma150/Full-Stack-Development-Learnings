// first install pdf-lib
// npm install pdf-lib
// node 14.firstWirtingPDF.js --source=teams.json --dest=root


let minimist=require("minimist");
let fs=require("fs");
let path=require("path");
let pdf=require("pdf-lib");
const { PDFDocument } = require("pdf-lib");

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
        let fileName=path.join(teamFN,teams[i].matches[j].vs+".pdf");
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
    let t1=teamName;
    let t2=match.vs;
    let result=t1+" "+match.result;

    // Reading template in binary mode
    let originalBytes=fs.readFileSync("Template.pdf");
    
    //load the pdf document which we load in originalBytes variable using pdf-lib module it gives us promise for loading
    let promiseToLoadBytes=pdf.PDFDocument.load(originalBytes);

    // then we process on promise given by pdf-lib
    promiseToLoadBytes.then(function(pdfDoc) {
        // get the first page of pdf ref as variable
        let page=pdfDoc.getPage(0);
        page.drawText(t1,{
            x:320,
            y:636,
            size:20
        });
        page.drawText(t2,{
            x:320,
            y:617,
            size:20
        });
        page.drawText(result,{
            x:320,
            y:596,
            size:20
        });
        let promiseToSave=pdfDoc.save();
        promiseToSave.then(function(changeBytes){
            fs.writeFileSync(matchFileName,changeBytes);
        })
    })

    

}