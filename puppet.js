const puppeteer = require('puppeteer');
const exampleUrl = 'https://codingbat.com/java/Warmup-1';

puppeteer
.launch()
.then((browser)=>{
  return browser.newPage();
})