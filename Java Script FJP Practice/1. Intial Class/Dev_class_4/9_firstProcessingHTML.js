// npm install jsdom
// node 9_firstProcessingHTML.js --source=download.html

let minimist=require("minimist");
let fs=require("fs");
let jsdom=require("jsdom");
// will load html and prepare the dom for the programmer just like a browser.

let args=minimist(process.argv);

fs.readFile(args.source,"utf-8",function(er,html){
    let dom=new jsdom.JSDOM(html);
    let document=dom.window.document;

    let descs=document.querySelectorAll("a.cb-text-complete");
    for(let i=0;descs.length;i++){
        console.log(descs[i].textContent);
    }

})