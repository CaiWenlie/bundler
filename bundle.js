const glob = require('glob')
const fs = require('fs')
const compressing = require('compressing')
const ignore = require('ignore')
const pump = require('pump')

function bundle(source, destination) {
  destination = destination || process.cwd() + '/bundle.txt'

  const gitignoreContent = fs.existsSync(source + '/.gitignore') ? fs.readFileSync(source + '/.gitignore', 'utf-8') : ''
  const ig = ignore().add(gitignoreContent)

  const files = glob.sync(source + '/**/**.**', {
    dot: true
  })

  const tgzStream = new compressing.tgz.Stream()
  ig.filter(files)
    .forEach(file => {
      tgzStream.addEntry(file, {
        relativePath: file.replace(source + '/', '')
      })
    })

  const destStream = fs.createWriteStream('bundle.tgz')
  pump(tgzStream, destStream, encode)

  function encode() {
    const buffer = fs.readFileSync('bundle.tgz')
    const content = buffer.toJSON().data.map(item => String.fromCharCode(item + 32)).join('')
    fs.writeFileSync(destination, content)
    fs.unlink('bundle.tgz', () => { })

    console.log('done')
  }

}

module.exports = bundle