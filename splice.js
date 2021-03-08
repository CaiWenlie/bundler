const fs = require('fs')
const path = require('path')

function splice(source, limit = 4) {
  const readStream = fs.createReadStream(source)
  let fileNum = 0
  let size = 0
  let dest = null
  let writeStream = null

  readStream.setEncoding('utf-8')
  readStream.on('data', (chunk) => {
    const chunkSize = Buffer.byteLength(chunk)
    if (size + chunkSize > limit * 1024 * 1024) {
      size = 0
      writeStream.end()
      writeStream = null
    }
    if (!writeStream) {
      dest = rename(source, ++fileNum)
      writeStream = fs.createWriteStream(dest)
    }
    writeStream.write(chunk)
    size += chunkSize
  })
  readStream.on('end', () => {
    console.log('done')
  })

}

function rename(source, num) {
  const dirname = path.dirname(source).replace(/^\./, '')
  const basename = path.basename(source)
  return dirname + basename.replace(/^([^\.]+)/, ($1) => $1 + '-' + num)
}

module.exports = splice
