const compressing = require('compressing')
const fs = require('fs')

const stream = new compressing.tgz.Stream()
stream.addEntry('./lib/app.js')
stream.addEntry('./lib/public/favicon.ico', {
  relativePath: 'public/favicon.ico'
})

stream
  .pipe(fs.createWriteStream('dist/test.tgz'))