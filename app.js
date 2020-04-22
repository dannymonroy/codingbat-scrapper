const baseUrl = 'https://codingbat.com/java';
const urlScrapper = require('./urlScrapper.js');
const createMiddleUrls = require('./middle.js');
const puppet = require('./puppet.js');

async function init () {
  try{
  const mainUrls = await urlScrapper(baseUrl);
  const challangesUrls = await createMiddleUrls(mainUrls);
  await puppet(challangesUrls);
  console.log('All done!');
  } catch (err) {
    console.log('Error in app.js: ', err);
  }
}

init();



