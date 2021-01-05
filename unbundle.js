const fs = require('fs')
const compressing = require('compressing')

function unbundle(source, destination) {
  destination = destination || process.cwd() + '/bundle'
  const content = fs.readFileSync(source, { encoding: 'utf-8' })
  fs.writeFileSync('dist/bundle.tgz', Buffer.from(content.trim().split(' ')))

  compressing.tgz.uncompress('dist/bundle.tgz', destination)
}

module.exports = unbundle
