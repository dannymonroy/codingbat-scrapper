/*TODO: 1- We need to do this for sections
        2- Add counter to the logging while creating the challanges
        3- Put all app together creating exports 
        */
const puppeteer = require('puppeteer');
const $ = require('cheerio');
const fs = require('fs');
const challange = {};

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

const arr = objDestructuring(urls);



async function run (arr){
  try{
    for(const url of arr) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto(url);
    // console.log(await page.content());
    const html = await page.content();
    challange.name = await $('span[class = "h2"]', html)[1].children[0].data;
    challange.description = await $('p[class = "max2"]', html)[0].children[0].data;
  
    const testCases = [];
    testCases.push($('br',html)[1].next.data);
    testCases.push($('br',html)[2].next.data);
    testCases.push($('br',html)[3].next.data);
  
    challange.testcases = await testCases;
    await createFile('final.js' , await formatChallange(challange));
  }
  await browser.close();
  } catch (err) {
    console.log("CATCHING ERRORS: " + err);
  }
}

run(arr);


function formatChallange (obj) {
  return `
  /*
  Title: ${obj.name}
  Description: ${obj.description}

  Test Cases: 
  ${obj.testcases[0]}
  ${obj.testcases[0]}
  ${obj.testcases[0]}
  */
  `
}

function createFile(fileName, data){
  
  fs.appendFile(fileName, data, (err) =>{
    if (err) throw err;
    console.log(`Challange created`);
  })
}