const rp = require('request-promise');
const $ = require('cheerio');
const utils = require('./utils.js');

module.exports = async function run (file) {
  const urls = utils.readFile(file);
  const problemsObj = createLinkObj(urls);
  
  try{
    for(const url of urls){
      const html = await rp(url)
      const selector = 'td > img + a';
      const leng = await $(selector,html).length;
      for (let i = 0; i < leng; i++) {
        await problemsObj[url].push( await $(selector, html)[i].attribs.href);
      }
      if(url === 'http://codingbat.com/java/Functional-2'){
        await utils.createFile('middleurls.json', JSON.stringify(problemsObj), 'Urls created!');
      }
    }
  } catch (error){
    console.log('Error in middle.js: ' + error);
  }
}

const createLinkObj = arr => {
  const obj = {}
  for(const elem of arr){
    obj[elem] = [];
  }
  return obj
}