const puppeteer = require("puppeteer");
let page;
console.log("Before");
// puppeteer by default headless browser
const browserOpenPromise = puppeteer.launch({ headless: false });

browserOpenPromise
  .then(function (browser) {
    //currently opened tabs
    const pageArrayPromise = browser.pages();
    return pageArrayPromise;
  })
  .then(function (browserPages) {
    page = browserPages[0];
    let gotoPromise = page.goto("https://www.google.com");
    return gotoPromise;
  }).then(function(){
    // Waiting for the element to appear on the page
    page.waitForSelector("input[type='text']",{visible:true});
  })
  .then(function(){
    // console.log("Reached google home page");
    // type any element on that page -> selector
    let keysWillBeSendPromise=page.type("input[type='text']","pepcoding");
    return keysWillBeSendPromise;

  }).then(function(){
    // page.keyboard to type special characters
    let enterWillBePressed= page.keyboard.press("Enter");
    return enterWillBePressed;
  }).then(function(){
    let elementWaitPromise = page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md",{visible:true});
    return elementWaitPromise;
  })
  .then(function(){
    let keysWillBeSendPromise=page.click("h3.LC20lb.MBeuO.DKV0Md","pepcoding");
    return keysWillBeSendPromise;
  })
  .catch(function(err){
    console.log(err);
  })
console.log("After");
