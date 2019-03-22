const fs = require('fs')

module.exports = function cat(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      throw err
    } else {
      process.stdout.write(data)
    }
  })
}

