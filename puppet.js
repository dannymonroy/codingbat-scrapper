const puppeteer = require('puppeteer');
const $ = require('cheerio');
const exampleUrl = 'https://codingbat.com/prob/p187868';
const obj = {};

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
  obj.name = $('span[class = "h2"]', html)[1].children[0].data;
  obj.description = $('p[class = "max2"]', html)[0].children[0].data;
  console.dir(obj);
})
.catch(err => {
  throw err + " code: 2";
})