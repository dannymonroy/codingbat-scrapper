const fs = require('fs');

module.exports = {
  
  appendFile : function (fileName, data, message){ 
    fs.appendFile(fileName, data, (err) =>{
      if (err) throw 'ERROR ENCOUNTERED: ' + err;
      console.log(message);
    })
  },

  formatchallenge : function (obj) {
    return `
    /*
    Url: ${obj.url}
    Title: ${obj.name}
    Section: ${obj.section}
    Description: ${obj.description}
  
    Test Cases: 
    ${obj.testcases[0]}
    ${obj.testcases[0]}
    ${obj.testcases[0]}
    */
    `
  }
}
