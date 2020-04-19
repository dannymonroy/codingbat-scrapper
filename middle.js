const rp = require('request-promise');
const $ = require('cheerio');
const fs = require('fs');

const rawdata = fs.readFileSync('urls.json');
const urls = JSON.parse(rawdata);
const obj = {
  'http://codingbat.com/java/Warmup-1':[],
  'http://codingbat.com/java/Warmup-2':[],
  'http://codingbat.com/java/String-1':[],
  'http://codingbat.com/java/Array-1':[],
  'http://codingbat.com/java/Logic-1':[],
  'http://codingbat.com/java/Logic-2':[],
  'http://codingbat.com/java/String-2':[],
  'http://codingbat.com/java/String-3':[],
  'http://codingbat.com/java/Array-2':[],
  'http://codingbat.com/java/Array-3':[],
  'http://codingbat.com/java/AP-1':[],
  'http://codingbat.com/java/Recursion-1':[],
  'http://codingbat.com/java/Recursion-2':[],
  'http://codingbat.com/java/Map-1':[],
  'http://codingbat.com/java/Map-2':[],
  'http://codingbat.com/java/Functional-1':[],
  'http://codingbat.com/java/Functional-2':[],
}

for(const url of urls){
  rp(url)
    .then((html) => {
      //success!
      const selector = 'td > img + a';
      const leng = $(selector,html).length;
      for (let i = 0; i < leng; i++) {
        obj[url].push($(selector, html)[i].attribs.href);
      }
      return obj;
      
    }).then((data) => {
      if(url === 'http://codingbat.com/java/Functional-2'){
        fs.appendFile('middleurls.json', JSON.stringify(data), (err) =>{
          if (err) throw err;
          console.log(`The challange URLs has been created`);
        })
      }
    });
}
