// npm install axios
// node 8_FirstWebHtmlDownload.js --dest="download.html" --url="https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-schedule-fixtures-and-results" 


let minimist=require("minimist");
let axios=require("axios").default;
let fs=require("fs");

let args=minimist(process.argv);

let downloadkaPromise=axios.get(args.url);
downloadkaPromise.then(function(response){
    let html=response.data;
    fs.writeFileSync(args.dest,html,"utf-8");
}).catch(function(err){
    console.log(err);
})