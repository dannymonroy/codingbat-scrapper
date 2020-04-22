const puppeteer = require('puppeteer');
const $ = require('cheerio');
const utils = require('./utils.js');
const challenge = {};

const baseURL = 'https://codingbat.com';
const middleUrl = '/prob/p';

module.exports = async function run (obj, format){
  try {
    obj = await JSON.parse(obj);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(0);
    for(const elem of obj) {

      let url = baseURL+middleUrl;
      
      for(const code of elem.codes){
        await page.goto(url+code);
        let html = await page.content();
        challenge.url = url+code
        challenge.section = elem.name;
        challenge.name = $('span[class = "h2"]', html)[1].children[0].data;
        challenge.description = $('p[class = "max2"]', html)[0].children[0].data;
          
        const testCases = [];
        testCases.push($('br',html)[1].next.data);
        testCases.push($('br',html)[2].next.data);
        testCases.push($('br',html)[3].next.data);
          
        challenge.testcases = testCases;
        utils.appendFile(`./output/${elem.name}.${format}` , utils.formatchallenge(challenge, format), `Challenge ${challenge.name} created`);
    }
   
  }
  } catch (err) {
    console.log("Error at puppet.js",err)
  }

}
