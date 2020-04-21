/*
  TODO: 1- We need to do this for sections
        2- Add counter to the logging while creating the challanges
        3- Put all app together creating exports 
        4- Create Utils file
*/
const puppeteer = require('puppeteer');
const $ = require('cheerio');
const utils = require('./utils.js');
const challange = {};

const baseURL = 'https://codingbat.com';




module.exports = async function run (fileName){
  const arr = objDestructuring(await utils.readFile(fileName));
  try{
    for(const url of arr) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(0);
    await page.goto(url);
    const html = await page.content();
    challange.name = $('span[class = "h2"]', html)[1].children[0].data;
    challange.description = $('p[class = "max2"]', html)[0].children[0].data;
  
    const testCases = [];
    testCases.push($('br',html)[1].next.data);
    testCases.push($('br',html)[2].next.data);
    testCases.push($('br',html)[3].next.data);
  
    challange.testcases = testCases;
     utils.createFile('final.js' , utils.formatChallange(challange), `Challange ${challange.name} created`);
  }
  await browser.close();
  } catch (err) {
    console.log("CATCHING ERRORS: " + err);
  }
}

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