const fs = require('fs');

module.exports = {
  
  appendFile : function (fileName, data, message){ 
    fs.appendFile(fileName, data, (err) =>{
      if (err) throw 'ERROR ENCOUNTERED: ' + err;
      console.log(message);
    })
  },

  formatchallenge : function (obj, options) {
    options = options.toLowerCase().trim()
    if(options === 'md'){
      return `
#### Title: ${obj.name}
##### Url: ${obj.url}
##### Section: ${obj.section}
 **Description:** ${obj.description}
 **Test Cases**  
1. ${obj.testcases[0]}  
2. ${obj.testcases[1]}  
3. ${obj.testcases[2]}
    
`.replace('\\','');
    } else if(options === 'js'){
      return `
      /*
      Title: ${obj.name}
      Url: ${obj.url}
      Section: ${obj.section}
      Description: ${obj.description}
    
      Test Cases: 
      ${obj.testcases[0]}
      ${obj.testcases[1]}
      ${obj.testcases[2]}
      */
      `
    } else {
      throw new Error('Not a valid format');
    }
  }
}
