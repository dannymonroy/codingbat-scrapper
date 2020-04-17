const rp = require('request-promise');
const url = 'https://codingbat.com/java';

rp(url)
  .then(function(html){
    //success!
    console.log(html);
  })
  .catch(function(err){
    console.error(`Something went wrong`);
  });