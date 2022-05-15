const fs = require("fs");


const readFile = async path => {
    const buffer = await new Promise((resolve, reject) => {
      fs.readFile(path, (err, buffer) => {
        if (err) {
          reject(err)
        }
        resolve(buffer)
      })
    })
  
    return buffer.toString()
}

module.exports = {
    readFile
  }