const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";
const request = require("request");
const cheerio = require("cheerio");
console.log("Before");
request(url, cb);
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        extractHTML(html);
    }
}
console.log("After");
function extractHTML(html){
    let $=cheerio.load(html);
    let teamsArr=$(".ds-inline-flex .ds-text-tight-l ");
    // console.log($(teamsArr[1]).text());

    let inningsArr=$(".ds-w-full .ds-table .ds-table-md .ds-table-auto  .ci-scorecard-table");

    let htmlStr="";
    for(let i=0;i<inningsArr.length;i++){
        let cHtml=$(inningsArr[i].html());
        htmlStr+=cHtml;
    }
    console.log(htmlStr);
    
}