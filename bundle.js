const glob = require('glob')
const fs = require('fs')

glob('lib/**/**.**', (er, files) => {
  const contents = []
  files.forEach(file => {
    const content = fs.readFileSync(file, { encoding: 'utf-8' })
    contents.push({
      filename: file.replace('lib/', ''),
      content
    })
  })
  const result = contents.map(item => {
    return `
\`\`\`
// ${item.filename}
${item.content}
\`\`\`
`
  }).join('__SEPARATOR__')
  fs.writeFileSync('dist/bundle.md', result)
})