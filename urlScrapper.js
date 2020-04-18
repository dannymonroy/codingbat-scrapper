const rp = require('request-promise');
const $ = require('cheerio');
const fs = require('fs');
const mainUrl = 'https://codingbat.com/java';

rp(mainUrl)
  .then(function(html){
    const sectionUrls = [];
    for (let i = 0; i < 17; i++) {
      sectionUrls.push(`http://codingbat.com${$('.summ > a', html)[i].attribs.href}`);
    }
    return sectionUrls;
  }).then(data => {
    fs.writeFile('urls.json', JSON.stringify(data), (err) =>{
      if (err) throw err;
      console.log('The URL file has been created');
    })
  })
  .catch(function(err){
    console.error(`Something went wrong: ${err}`);
  });