const baseUrl = 'https://codingbat.com/java';
const urlScrapper = require('./urlScrapper.js');
const createMiddleUrls = require('./middle.js');
const puppet = require('./puppet.js');
const utils = require('./utils');

async function init (format) {
  if(utils.validateInput(format)){
    try{
    const mainUrls = await urlScrapper(baseUrl);
    const challangesUrls = await createMiddleUrls(mainUrls);
    await puppet(challangesUrls, format);
    console.log('All done!');
    } catch (err) {
      console.log('Error in app.js: ', err);
    }
  } else {
    console.log('Input not valid, please select "js" for commented javascript file or "md" for Markdown');
  }
}

init('js');



