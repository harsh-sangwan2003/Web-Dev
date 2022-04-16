const cheerio = require('cheerio');
const request = require('request');
const getRepoPageHTML = require('./repoPage');

const baseURL = 'https://github.com';
const URL = 'https://github.com/topics';

request(URL, cb);

function cb(err, response, html) {

    if (err)
        console.log("Error is: ", err);

    else if (response.statusCode == 404)
        console.log("Page not found");

    else
        getRepoHeads(html);
}

function getRepoHeads(html) {

    let $ = cheerio.load(html);
    let repoContainer = $('.container-lg.p-responsive.mt-6 a');

    for (let link of repoContainer) {

        let attr = $(link).attr('href');
        let topic = attr.split('/');
        topic = topic[topic.length - 1];

        let fullLink = `${baseURL}${attr}`;

        getRepoPageHTML(fullLink, topic);
    }
}