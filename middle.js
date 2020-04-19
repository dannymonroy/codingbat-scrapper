const rp = require('request-promise');
const $ = require('cheerio');
const fs = require('fs');

const rawdata = fs.readFileSync('urls.json');
const urls = JSON.parse(rawdata);

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
        fs.appendFile('middleurls.json', JSON.stringify(data), (err) =>{
          if (err) throw err;
          console.log(`The challange URLs has been created`);
        })
      }
    });
}
