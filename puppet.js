const puppeteer = require('puppeteer');
const $ = require('cheerio');
const exampleUrl = 'https://codingbat.com/prob/p187868';

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
  console.log(html);
})
.catch(err => {
  throw err;
})