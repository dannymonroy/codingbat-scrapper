const fs = require('fs');

module.exports = {
  readFile : function (fileName) {
    try{
    const rawdata = fs.readFileSync(fileName);
    return JSON.parse(rawdata);
    } catch (err){
      console.log(err);
    }
  },

  createFile : function (fileName, data, message){ 
    fs.appendFile(fileName, data, (err) =>{
      if (err) throw 'ERROR ENCOUNTERED: ' + err;
      console.log(message);
    })
  },

  formatChallange : function (obj) {
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
}
