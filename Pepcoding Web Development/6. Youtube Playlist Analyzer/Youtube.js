const puppeteer = require('puppeteer');
const pdf = require("pdfkit");
const fs = require("fs");
let cTab;
let link = "https://www.youtube.com/playlist?list=PLW-S5oymMexXTgRyT3BWVt_y608nt85Uj";
(async function(){
    try{
        let browserOpen = puppeteer.launch({
            headless:false,
            defaultViewport:null,
            args:['--start-maximized'] // isase browser full screen me khulega
        })
        let browserInstance = await browserOpen; // jab browser open run ho jayega uske bad hi ye initialized hoga
        let allTabsArr = await browserInstance.pages(); // basically await me wait karega till wo successfully load na ho jaye

        // current tab
        cTab = allTabsArr[0];
        await cTab.goto(link);
        await cTab.waitForSelector("yt-formatted-string.style-scope.yt-dynamic-sizing-formatted-string.yt-sans-28");

        // isme ham function as a argument and uske sath next argument selector as a argument pass kiya.
        // ye selector hi select me as a argument pass ho jayega.
        let name = await cTab.evaluate(function(select){
            return document.querySelector(select).innerText;
        },"yt-formatted-string.style-scope.yt-dynamic-sizing-formatted-string.yt-sans-28");
        // console.log(name);

        let allData = await cTab.evaluate(getData,"yt-formatted-string.byline-item > span.style-scope.yt-formatted-string");

        console.log(name , allData.noOfVideos);
        let TotalVideos = allData.noOfVideos;

        // ek scroll me jitne videos milege uske liye abb kaam karenge
        let currentVideos = await getCurrentVideosLength();
        console.log(currentVideos);
        // Ek page me hamare pass 100 videos hi hain


        while(TotalVideos-currentVideos>=20){
            await scrollToBottom();
            currentVideos=await getCurrentVideosLength();
        }

        let finalList = await getStats();
        // console.log(finalList);

        // ye hamare liye pathway bana deta hai kisi bhi pdf file ko create karne ke liye.
        let pdfDoc = new pdf;
        pdfDoc.pipe(fs.createWriteStream('Playlist.pdf'));
        pdfDoc.text(JSON.stringify(finalList));
        pdfDoc.end();
        






    }catch(error){
        console.log(error);
    }
})();


function getData(selector){
    let allElems = document.querySelectorAll(selector);
    let noOfVideos = allElems[0].innerText;
    
    return {
        noOfVideos
    }
}


async function getCurrentVideosLength(){
    let length = await cTab.evaluate(getLength,"#content.style-scope.ytd-playlist-video-renderer");
    return length;
}

function getLength(durationSelector){
    let durationElement = document.querySelectorAll(durationSelector);
    return durationElement.length;
}

async function scrollToBottom(){
    await cTab.evaluate(goToBottom);

    function goToBottom(){
        window.scrollBy(0,window.innerHeight);
    }
}

async function  getStats(){
    let list = cTab.evaluate(getNameAndDuration,"a.yt-simple-endpoint.style-scope.ytd-playlist-video-renderer","span.style-scope.ytd-thumbnail-overlay-time-status-renderer");
    return list;
}

function getNameAndDuration(videoSelector,durationSelector){
    let videoElem = document.querySelectorAll(videoSelector);
    let durationElem = document.querySelectorAll(durationSelector);
    
    let currentList = []
    for(let i=0;i<durationElem.length;i++){
        let videoTitle = videoElem[i].innerText;
        let duration = durationElem[i].innerText;

        currentList.push({videoTitle,duration});

    }

    return currentList;
   
}













// yt-formatted-string.byline-item > span.style-scope.yt-formatted-string

// span.style-scope.ytd-thumbnail-overlay-time-status-renderer


// a.yt-simple-endpoint.style-scope.ytd-playlist-video-renderer