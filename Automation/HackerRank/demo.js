const puppeteer = require('puppeteer');

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

    let pagePromise = newTab.goto('https://www.pepcoding.com');
    return pagePromise;
}).then(function () {

});

console.log("After");