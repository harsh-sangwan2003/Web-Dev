const cheerio = require('cheerio');
const request = require('request');
const getIssuesHTML = require('./issue');

const baseURL = 'https://github.com';

function getRepoPageHTML(url, topic) {

    request(url, cb);

    function cb(err, response, html) {

        if (err)
            console.log("Error is :", err);

        else if (response.statusCode == 404)
            console.log("Page not found");

        else
            handleHTML(url, html, topic);
    }
}

function handleHTML(url, html, topic) {

    let $ = cheerio.load(html);
    let headingsArr = $('.f3.color-fg-muted.text-normal.lh-condensed');

    for (let i = 0; i < 4; i++) {

        let twoAnchors = $(headingsArr[i]).find('a');
        let link = $(twoAnchors[1]).attr('href');
        link = baseURL + link;

        let repoName = link.split('/').pop();

        let fullLink = `${link}/issues`;
        getIssuesHTML(fullLink, topic, repoName);
    }
}


module.exports = getRepoPageHTML;