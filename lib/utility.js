import fs from 'fs';
//this is just a 
export default class Utility {
  constructor() {

  }
  myFileSystem(fileName, content) {
    fs.writeFile(fileName, content, function (err) {
      if (err) return console.log(err);
      console.log(content + ' > ' + fileName);
    });
  }
}