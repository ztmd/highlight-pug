'use strict';

const fs = require('fs');

const raw = fs.readFileSync('pug.js').toString();

let result = raw.replace(/['"]use strict['"];?/, '').replace(/module.exports = highlightPug;?/, '').trim().concat(`

if (typeof hljs !== 'undefined') {
  hljs.registerLanguage('pug', highlightPug);
}
`);

fs.writeFileSync('index.js', result);
