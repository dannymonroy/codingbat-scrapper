const rp = require('request-promise');
const $ = require('cheerio');
const utils = require('./utils.js');

//TODO: Make length of the array not hardcoded.


module.exports = async function getMainUrls (baseUrl) {
  try {
    const html = await rp(baseUrl)
    const sectionUrls = [];
    for (let i = 0; i < 17; i++) {
      const temp = $('.summ > a', await html)[i].attribs.href;
      sectionUrls.push(
        {
         id: i,
         url: `http://codingbat.com${temp}`,
         name: temp.substring(6, temp.length),
         codes: []
        });
    }
     return sectionUrls;

  } catch (error) {
    console.log('Error in urlScrapper.js: ' + error);
  }
}