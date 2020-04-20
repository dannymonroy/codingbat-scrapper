const puppeteer = require('puppeteer');
const $ = require('cheerio');
const fs = require('fs');
const exampleUrl = 'https://codingbat.com/prob/p187868';
const challange = {url: exampleUrl};

const baseURL = 'https://codingbat.com';

const rawdata = fs.readFileSync('middleurls.json');
const urls = JSON.parse(rawdata);

function objDestructuring(obj) {
  const keys = Object.keys(obj);
  let urls = [];
  keys.forEach((key,i) => {
    obj[key].forEach((elem, i) => {
      urls.push(baseURL+obj[key][i]);
    })
    
  });
  return urls
}

const arrayOfLinks = objDestructuring(urls);
// console.log(arrayOfLinks);

arrayOfLinks.forEach(elem => {

})
puppeteer
.launch()
.then((browser)=>{
  return browser.newPage();
})
.then((page) => {
  return page.goto(exampleUrl).then(() => {
    return page.content();
  });
})
.then(html => {
  challange.name = $('span[class = "h2"]', html)[1].children[0].data;
  challange.description = $('p[class = "max2"]', html)[0].children[0].data;

  const testCases = [];
  testCases.push($('br',html)[1].next.data);
  testCases.push($('br',html)[2].next.data);
  testCases.push($('br',html)[3].next.data);

  challange.testcases = testCases;
  console.log(formatChallange(challange))
})
.catch(err => {
  throw err + " code: 2";
})


function formatChallange (obj) {
  return `
  /*
  Url: ${obj.url}
  Title: ${obj.name}
  Description: ${obj.description}

  Test Cases: 
  ${obj.testcases[0]}
  ${obj.testcases[0]}
  ${obj.testcases[0]}
  */
  `
}