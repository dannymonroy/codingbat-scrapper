const rp = require('request-promise');
const $ = require('cheerio');
const fs = require('fs');

const rawdata = fs.readFileSync('urls.json');
const urls = JSON.parse(rawdata);

urls.forEach(url => {
  rp(url)
    .then(function(html){
      //success!
      const challangeLinks = [];
      const selector = 'td > img + a';
      const leng = $(selector,html).length;
      for (let i = 0; i < leng; i++) {
        challangeLinks.push($(selector, html)[i].attribs.href);
      }
      return challangeLinks;
    })
    .then((data) => {
      fs.appendFile('middleurls.json', JSON.stringify(data), (err) =>{
        if (err) throw err;
        console.log(`The challange URLs for ${url} has been created`);
      })
    })
    .catch(function(err){
      //handle error
    });
})