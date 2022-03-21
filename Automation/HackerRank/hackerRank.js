const puppeteer = require('puppeteer');
const codeObj = require('./code.js');

const loginLink = 'https://www.hackerrank.com/auth/login';
let email = 'lawimoh414@shackvine.com';
let passwd = 'pep@coding123';

let page = '';

console.log("Before");

let browserPromise = puppeteer.launch({

    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
});

browserPromise.then(function (browserInstance) {

    let newTabPromise = browserInstance.newPage();
    return newTabPromise;
}).then(function (newTab) {

    page = newTab;
    let pagePromise = newTab.goto(loginLink);
    return pagePromise;
}).then(function () {

    let emailPromise = page.type('input[id="input-1"]', email, { delay: 60 });
    return emailPromise;
}).then(function () {

    let passwdPromise = page.type('input[id="input-2"]', passwd, { delay: 60 });
    return passwdPromise;

}).then(function () {

    let loginPromise = page.click('button[data-analytics="LoginPassword"]');
    return loginPromise;
}).then(function () {

    let algoPromise = waitAndClickPromise('a[data-attr1="algorithms"]', page);
    return algoPromise;
}).then(function () {

    let warmUpPromise = waitAndClickPromise('input[value="warmup"]', page);
    return warmUpPromise;

}).then(function () {

    let challengeArrPromise = page.$$('.challenge-submit-btn', { delay: 60 });
    return challengeArrPromise;
}).then(function xyz(questionArr) {

    let questonSolvePromise = questionSolver(page, questionArr[1], codeObj.answers[0]);
    return questonSolvePromise;
});

function waitAndClickPromise(selector, page) {

    return new Promise(function (resolve, reject) {

        let waitPromise = page.waitForSelector(selector);
        waitPromise.then(function () {

            let clickAlgoPromise = page.click(selector, { delay: 60 });
            return clickAlgoPromise;
        }).then(function () {

            resolve();
        }).catch(function () {

            reject();
        })
    });
}

function questionSolver(page, question, sol) {

    return new Promise(function (resolve, reject) {

        let questionClickedPromise = question.click();
        questionClickedPromise.then(function () {

            let inputBoxPromise = waitAndClickPromise('.checkbox-input', page);
            return inputBoxPromise;

        }).then(function () {

            let textAreaPromise = waitAndClickPromise('.input.text-area.custominput', page);
            return textAreaPromise;

        }).then(function () {

            let typeInTextArea = page.type('.input.text-area.custominput', sol, { delay: 1 });
            return typeInTextArea;
        }).then(function () {

            let ctrlPressPromise = page.keyboard.down('Control');
            return ctrlPressPromise;
        }).then(function () {

            let altpressPromise = page.keyboard.press('A', { delay: 20 });
            return altpressPromise;
        }).then(function () {

            let cutPromise = page.keyboard.press('X', { delay: 20 });
            return cutPromise;
        }).then(function () {

            let ctrlReleasePromise = page.keyboard.up('Control');
            return ctrlReleasePromise;
        }).then(function () {

            let editorSelectpromise = waitAndClickPromise('.monaco-editor.no-user-select.vs', page);
            return editorSelectpromise;
        }).then(function () {

            let ctrlPressPromise = page.keyboard.down('Control');
            return ctrlPressPromise;

        }).then(function () {

            let altpressPromise = page.keyboard.press('A', { delay: 20 });
            return altpressPromise;
        }).then(function () {

            let pastePromise = page.keyboard.press('V', { delay: 20 });
            return pastePromise;
        }).then(function () {

            let ctrlReleasePromise = page.keyboard.up('Control');
            return ctrlReleasePromise;
        }).then(function () {

            let clickPromise = page.click('.hr-monaco__run-code', { delag: 20 });
            return clickPromise;
        }).then(function () {

            let inputMessagePromise = page.waitForSelector('.run-time-message', { delay: 100 });
            return inputMessagePromise;
        }).then(function () {

            let moveBackPromise = page.goBack({ delay: 20 });
            return moveBackPromise;
        }).then(function () {

        }).then(function () {
            resolve();
        }).catch(function (err) {

            console.log(err);
        });
    });
}

console.log("After");