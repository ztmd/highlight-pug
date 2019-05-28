'use strict';

const hljs = require('highlight.js');
const highlightPug = require('./pug');

hljs.registerLanguage('pug', highlightPug);

const pug = `doctype html
html
  head
    include ./head

  body
    .nmr
      h1 网易云音乐推荐

      block content

    if config.github
      include ./github

    if script
      script!=script
    else
      script(src="./js/index.js")


a(target="_blank" href=\`https://music.163.com/artist?id=\${artist.id}\`)=artist.name
`;
const pug2 = `
div#foo(data-bar="foo")&attributes({'data-foo': 'bar'})
`;

const ret = hljs.highlight('pug', pug);
const ret2 = hljs.highlight('pug', pug2);

console.log('--------------------');
console.log(ret.value);
console.log('--------------------');
console.log(ret2.value);
console.log('--------------------');
