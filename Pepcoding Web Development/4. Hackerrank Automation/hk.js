const puppeteer = require('puppeteer');
const codeObj=require('./code');
const loginLink = 'https://www.hackerrank.com/auth/login';
const email = "Modik84099@smetin.com";
const password = "Pepcoding@123";
let browserOpen=puppeteer.launch({
    // for visibility of chrome
    headless:false,
    // isase hamara chromium browser full screen me khulega
    args:['--start-maximized'],

    defaultViewport:null

})

let page;

browserOpen.then(function(browserObj){
    // isase hame chromium ek new page kholkar de dega
    let browserOpenPromise=browserObj.newPage();

    return browserOpenPromise;
}).then(function(newTab){
    page = newTab;
    let hackerrankOpenPromise= newTab.goto(loginLink);
    return hackerrankOpenPromise;
}).then(function(){
    // delay add kiye kyuki jo bhi ham add kar rhe hai wo hame dikhta rhe
    let emailIsEntered = page.type("input[id='input-1']",email,{delay:50});
    return emailIsEntered;
}).then(function(){
    let passwordIsEntered = page.type("input[type='password']",password,{delay:50});
    return passwordIsEntered;
 })
.then(function(){
    let loginButtonClicked = page.click('button[data-analytics="LoginPassword"]',{delay:50});
    return loginButtonClicked;
})
.then(function(){
    let algorithmPageClicked = waitAndClick('.topic-card a[data-attr1="algorithms"]',page);
    return algorithmPageClicked;
})
.then(function(){
    let getToWarmUp = waitAndClick('input[value="warmup"]',page);
    return getToWarmUp;
})
.then(function(){
    let waitFor3Seconds = page.waitForTimeout(3000);
    return waitFor3Seconds;
})
.then(function(){
    // $$ => document.querySelectorAll()
    // $ => document.querySelector
    let allChallangesPromise = page.$$('h4.challengecard-title');
    return allChallangesPromise;
}).then(function(questionsArr){
    // console.log('number of questions ',questionsArr);
    let questionWillBeSolved = questionSolver(page,questionsArr[0],codeObj.answers[0]);
    return questionWillBeSolved;
})


// ye function basically at the time of reload it basically wait for that page to reload then after that line executes.
function waitAndClick(selector,cPage){
    return new Promise(function(resolve,reject){
        let waitForModelPromise = cPage.waitForSelector(selector);
        waitForModelPromise.then(function(){
            let clickModel=cPage.click(selector);
            return clickModel;
        }).then(function(){
            resolve();
        }).catch(function(err){
            reject();
        })
    })
}



function questionSolver(page, question,answer){
    return new Promise(function(resolve,reject){
        let questionWillBeClicked = question.click();
       questionWillBeClicked.then(function(){
        let EditorInFocusPromise= waitAndClick('.monaco-editor.no-user-select.vs',page);
        return EditorInFocusPromise;
       }).then(function(){
        return waitAndClick('.checkbox-input',page);
       }).then(function(){
        return page.waitForSelector('textarea.custominput',page);
       }).then(function(){
        return page.type('textarea.custominput',answer,{delay:5});

       }).then(function(){
        let ctrlIsPressed = page.keyboard.down('Control');
        return ctrlIsPressed;
       }).then(function(){
        let AisPressed = page.keyboard.press('A',{delay:100});
        return AisPressed;
       }).then(function(){
            let XisPressed = page.keyboard.press('X',{delay:100});
            return XisPressed;
       }).then(function(){
        let CtrlisUnPressed = page.keyboard.up('Control');
        return CtrlisUnPressed;
       }).then(function(){
        let mainEditorInFocus = waitAndClick('.monaco-editor.no-user-select.vs',page);
        return mainEditorInFocus;
       }).then(function(){
        let ctrlIsPressed = page.keyboard.down('Control');
        return ctrlIsPressed;
       }).then(function(){
        let AisPressed = page.keyboard.press('A',{delay:100});
        return AisPressed;
       }).then(function(){
        let VisPressed = page.keyboard.press('V',{delay:100});
        return VisPressed;
       }).then(function(){
        let CtrlisUnPressed = page.keyboard.up('Control');
        return CtrlisUnPressed;
       })
       .then(function(){
        return page.click('.hr-monaco-submit',{delay:50});
       })
       .then(function(){
        resolve();
       }).then(function(err){
        reject();
       })
    })
}

