const fs = require('fs');
const { stdin, stdout } = process;

module.exports = {

  prompt : function (question) {
    return new Promise((resolve, reject) => {
      stdin.resume();
      stdout.write(question);
  
      stdin.on('data', data => resolve(data.toString().trim()));
      stdin.on('error', err => reject(err));
    });
  },
  
  appendFile : function (fileName, data, message){ 
    fs.appendFile(fileName, data, (err) =>{
      if (err) throw 'ERROR ENCOUNTERED: ' + err;
      console.log(message);
    })
  },

  validateInput : function(option){
    option = option.toLowerCase().trim();
    if(option === 'md'){
      return true;
    } else if(option === 'js'){
      return true;
    } else if(option === 'txt'){
      return true;
    } else {
      return false;
    }
  },

  formatChallenge : function (obj, option) {
    
    if(option === 'md'){
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
    } else if(option === 'js'){
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
    } else if(option === 'txt') {
return `
Title: ${obj.name}
Url: ${obj.url}
Section: ${obj.section}
Description: ${obj.description}

Test Cases: 
${obj.testcases[0]}
${obj.testcases[1]}
${obj.testcases[2]}
`
    } else {
      throw new Error('Not a valid format');
    }
  }
}
