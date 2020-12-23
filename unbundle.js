const fs = require('fs')

const content = fs.readFileSync('bundle.md', { encoding: 'utf-8' })
const files = content.split('__SEPARATOR__')
files.forEach(content => {
  content = content.replace(/^\s*```\s|```\s*$/g, '')
  const filepath = 'dist/bundle/' + content.match(/\/\/ (.*)\n/)[1]
  content = content.replace(/.*\n/, '')
  const dir = filepath.split('/').slice(0, -1).join('/')
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
  fs.writeFileSync(filepath, content)
})