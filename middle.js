const rp = require('request-promise');
const $ = require('cheerio');
const utils = require('./utils.js');

const urls = utils.readFile('challangeUrls.json');

const createLinkObj = arr => {
  const obj = {}
  for(const elem of arr){
    obj[elem] = [];
  }
  return obj
}

const problemsObj = createLinkObj(urls);

for(const url of urls){
  rp(url)
    .then((html) => {
      const selector = 'td > img + a';
      const leng = $(selector,html).length;
      for (let i = 0; i < leng; i++) {
        problemsObj[url].push($(selector, html)[i].attribs.href);
      }
      return problemsObj;
      
    }).then((data) => {
      if(url === 'http://codingbat.com/java/Functional-2'){
        utils.createFile('middleurls.json', JSON.stringify(data), 'Urls created!');
      }
    });
}
