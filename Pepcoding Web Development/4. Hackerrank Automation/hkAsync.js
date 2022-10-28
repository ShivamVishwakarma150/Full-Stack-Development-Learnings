const puppeteer = require('puppeteer');
const codeObj=require('./code');
const loginLink = 'https://www.hackerrank.com/auth/login';
const email = "Modik84099@smetin.com";
const password = "Pepcoding@123";


// IFEE Function
(async function(){
    try {
        let browserInstance= await puppeteer.launch({
            // for visibility of chrome
            headless:false,
            // isase hamara chromium browser full screen me khulega
            args:['--start-maximized'],
        
            defaultViewport:null
        
        })

        let newTab = await (await browserInstance).newPage();
        await newTab.goto(loginLink);
        await newTab.type("input[id='input-1']",email,{delay:50});
        await newTab.type("input[type='password']",password,{delay:50});

        await newTab.click('button[data-analytics="LoginPassword"]',{delay:50});


        await waitAndClick('.topic-card a[data-attr1="algorithms"]',newTab);

        await waitAndClick('input[value="warmup"]',newTab);

        let allChallanges = await newTab.$$('h4.challengecard-title');
        console.log("Total questions ",allChallanges.length);

    } catch (error) {
        console.log(error);
    }
})()



async function waitAndClick(selector,cPage){
    await cPage.waitForSelector(selector);

    let selectorClicked = cPage.click(selector);
    return selector;
}