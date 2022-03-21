const cheerio = require('cheerio');
const request = require('request');

request('https://www.worldometers.info/coronavirus/', cb);

//Async
// Response comes with an acknowledgement message - statusCode
function cb(err, response, html) {

    if (err)
        console.log("Error is: ", err);

    else {

        handleHtml(html);
    }
}

function handleHtml(html) {

    let setTool = cheerio.load(html);

    let contentArr = setTool('.maincounter-number span');

    console.log("Total cases: ", setTool(contentArr[0]).text());
    console.log("Deaths : ", setTool(contentArr[1]).text());
    console.log("Recovered: ", setTool(contentArr[2]).text());
}