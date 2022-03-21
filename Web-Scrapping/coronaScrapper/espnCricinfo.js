const cheerio = require('cheerio');
const request = require('request');

const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary';
request(url, cb);

function cb(err, response, html) {

    if (err)
        console.log("Error is: ", err);

    else
        handleHtml(html);
}

function handleHtml(html) {

    let setTool = cheerio.load(html);
    let content = setTool('div[itemprop="articleBody"]');

    console.log(setTool(content[0]).text());
}