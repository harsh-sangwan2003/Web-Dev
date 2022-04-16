const cheerio = require('cheerio');
const request = require('request');
const path = require('path');
const PDFDocument = require('pdfkit');
const fs = require('fs');

const baseURL = 'https://github.com';

function getIssuesHTML(url, topic, repoName) {

    request(url, cb);

    function cb(err, response, html) {

        if (err)
            console.log("Error is :", err);

        else if (response.statusCode == 404)
            console.log("Page not found");

        else
            handleHTML(url, html, topic, repoName);
    }
}

function handleHTML(url, html, topic, repoName) {

    let $ = cheerio.load(html);
    let linkArr = $('.Link--primary.v-align-middle');

    const arr = [];

    for (let link of linkArr) {

        let href = $(link).attr('href');

        arr.push(href.toString());
    }

    let folderPath = path.join(__dirname, topic);

    dirCreator(folderPath);

    let filePath = path.join(folderPath, repoName + ".pdf");

    let text = JSON.stringify(arr);

    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(filePath));
    doc.text(text);
    doc.end();
}

function dirCreator(folderPath) {

    if (fs.existsSync(folderPath) == false)
        fs.mkdirSync(folderPath);
}

module.exports = getIssuesHTML;