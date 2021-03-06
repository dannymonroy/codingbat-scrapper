const rp = require('request-promise');
const $ = require('cheerio');

module.exports = async function run(arr) {
  console.log("Starting getting the middle section URL's");
  try {
    const selector = 'td > img + a';
    for(let i = 0; i< arr.length; i++){
      const html = await rp(arr[i].url);
      const leng = $(selector,html).length;
      for(let j = 0; j<leng; j++){
        let leng = ($(selector, html)[j].attribs.href).length;
        arr[i].codes.push($(selector, html)[j].attribs.href.substr(7, leng));
      }
    }
     return JSON.stringify(arr);
  } catch (err) {
    console.log('Error in middle.js: ' + err);
  }
}