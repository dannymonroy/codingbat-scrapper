const baseUrl = 'https://codingbat.com/java';
const urlScrapper = require('./scripts/urlScrapper.js');
const createMiddleUrls = require('./scripts/middle.js');
const puppet = require('./scripts/puppet.js');
const utils = require('./scripts/utils.js');

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



