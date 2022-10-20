// the purpose of this project is to extract information of worldcup 2019 from cricinfo and present
// that in the form of excel and pdf scorecards
// the real purpose is to learn how to extract information and get experience with js
// A very good reason to ever make a project is to have good fun

// node 1_CricinfoExtracter.js --excel=Worldcup.csv --dataFolder=data --source=https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results 

// npm init -y
// npm install minimist
// npm install axios
// npm install jsdom
// npm install excel4node
// npm install pdf-lib


let minimist=require("minimist");
let axios=require("axios");
let jsdom=require("jsdom");
let pdf=require("pdf-lib");
let excel4node=require("excel4node");
const { arrayAsString } = require("pdf-lib");


let args=minimist(process.argv);
// console.log(args.source);
// console.log(args.excel);
// console.log(args.dataFolder);

// donwload using axios
// read using jsdom
// make excel using excel4node
// make pdf using pdf-lib


let responseKaPromise=axios.get(args.source);
responseKaPromise.then(function(response){
    let html=response.data;
    // console.log(html);
    let dom=new jsdom.JSDOM(html);
    let document=dom.window.document;
    let title=document.title;
    // console.log(title);

    let matches=[]; 
    let matchInfoDivs=document.querySelectorAll("div.ds-text-compact-xxs ");
    console.log(matchInfoDivs.length);
    var newarr=[];
    for(var i=27;i<matchInfoDivs.length;i++){
        newarr.push(matchInfoDivs[i]);
    }

    
    for(let i=0;i<newarr.length;i++){
        console.log(newarr[i].textContent);
    }
}).then(function(err){
    console.log(err);
})




// pending due to webpage error problem 