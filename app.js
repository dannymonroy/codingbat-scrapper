const baseUrl = 'https://codingbat.com/java';
const urlScrapper = require('./urlScrapper.js');
const createMiddleUrls = require('./middle.js');
const puppet = require('./puppet.js');
const fs = require('fs');



function run(){
  try{
    urlScrapper(baseUrl);
    const middleListener = setInterval(function(){
      if(fs.existsSync('challangeUrls.json')){
        console.log('ChallangeUrls file exists!');
        clearInterval(middleListener)
        createMiddleUrls('challangeUrls.json');
      } 
    }, 2000)
    const puppetInterval = setInterval(function() {
      if(fs.existsSync('middleurls.json')){
        console.log('middleUrl file exists!');
        clearInterval(puppetInterval);
        puppet('middleurls.json');
      }
    }, 2000)
  } catch (err) {
    console.log('ERROR: On App.js ', err);
  }
}

run();


