var fs = require('fs')
var path = require('path')

fs.writeFileSync(
  path.join(__dirname, '../public/template.html'),
  fs.readFileSync(
    path.join(__dirname, '../node_modules/serve-index/public/directory.html'),
    { encoding: 'utf8' }
  ) + '<a href="?upload">Upload</a>',
  { encoding: 'utf8' }
)