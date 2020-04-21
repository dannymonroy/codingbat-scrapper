const rp = require('request-promise');
const $ = require('cheerio');
const utils = require('./utils.js');
// const baseUrl = 'https://codingbat.com/java';

//TODO: Make length of the array not hardcoded.


module.exports = async function getMainUrls (baseUrl) {
  try {
    const html = await rp(baseUrl)
    const sectionUrls = [];
    for (let i = 0; i < 17; i++) {
      sectionUrls.push(`http://codingbat.com${$('.summ > a', html)[i].attribs.href}`);
    }
    await sectionUrls;
    await utils.createFile('challangeUrls.json', JSON.stringify(sectionUrls), 'Created main URL file'); 
  } catch (error) {
    console.log('Error in urlScrapper.js: ' + error);
  }
}