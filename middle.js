const rp = require('request-promise');
const $ = require('cheerio');
const fs = require('fs');

const rawdata = fs.readFileSync('urls.json');
const urls = JSON.parse(rawdata);
console.log({urls});

urls.forEach(url => {
  rp(url)
    .then(function(html){
      //success!
      let challangeLinks = [];
      const links = [];
      const selector = 'td > img + a';
      const leng = $(selector,html).length;
      for (let i = 0; i < leng; i++) {
        if(i === leng){
          links.push('"'+$(selector, html)[i].attribs.href+'"');
        } else{
          links.push('"'+$(selector, html)[i].attribs.href+'",');
        }
        challangeLinks += [...links][i];
      }
      return challangeLinks;
    })
    .then((data) => {
      // data = `[${data}]`;
      // //data = `"${url.substring(26, url.length)}": [${data}],\n`;
      //   // console.log(data);
      // fs.appendFile('middleurls.txt', data, (err) =>{
      //   if (err) throw err;
      //   console.log(`The challange URLs for ${url} has been created`);
      // })
    })
    .catch(function(err){
      throw err + " Something went wrong on the middle.js while creating the challange URL's";
    });
})