const rp = require('request-promise');
const $ = require('cheerio');
const mainUrl = 'https://codingbat.com/java';

rp(mainUrl)
  .then(function(html){
    const sectionUrls = [];
    for (let i = 0; i < 17; i++) {
      sectionUrls.push(`http://codingbat.com${$('.summ > a', html)[i].attribs.href}`);
    }
    console.log(sectionUrls);
  })
  .catch(function(err){
    console.error(`Something went wrong: ${err}`);
  });