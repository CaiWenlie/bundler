const fs = require('fs')
const compressing = require('compressing')

async function unbundle(source, destination) {
  destination = destination || process.cwd() + '/bundle'
  const content = fs.readFileSync(source, { encoding: 'utf-8' })
  const decoded = content.split('').map(item => item.charCodeAt(0) - 32)
  fs.writeFileSync('bundle.tgz', Buffer.from(decoded))

  await compressing.tgz.uncompress('bundle.tgz', destination)
  fs.unlink('bundle.tgz', () => { })
  console.log('done')
}

module.exports = unbundle
