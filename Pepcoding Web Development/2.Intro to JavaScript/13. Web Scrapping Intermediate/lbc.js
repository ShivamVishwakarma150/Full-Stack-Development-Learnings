const cheerio = require("cheerio");
const request = require("request");
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary";
console.log("Before");
request(url,cb);

function cb(err,response,html){
    if(err){
        console.log(err);
    }else{
       extractHTML(html);
    }
}

console.log("After");

function extractHTML(html){
    let $ = cheerio.load(html);
    let elemsArr=$(".ds-ml-4 .ci-html-content");
    let text=$(elemsArr[0]).text();
    let htmlData=$(elemsArr[0]).html();
    console.log("text data ",text);
    console.log("html data ",htmlData);
}