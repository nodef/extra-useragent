const {JSDOM} = require('jsdom');
const fs = require('fs');
const path = require('path');
const {EOL} = require('os');


async function loadPage(id) {
  var {window} = await JSDOM.fromURL('https://user-agents.net'+id);
  var {document} = window;
  var as = [...document.querySelectorAll('ul.compact_list li a')];
  return new Map(as.map(a => [a.getAttribute('href'),  a.textContent]));
}

function saveMap(pth, x) {
  var a = 'key,value'+EOL;
  for(var [key, value] of x)
    a += `"${key}","${value}"`+EOL;
  fs.writeFileSync(pth, a);
}

async function load() {
  var dir = 'data';
  var fil = path.join(dir, 'developers.csv');
  var developers = await loadPage('/developers');
  saveMap(fil, developers);
  var fil = path.join(dir, 'developer.csv');
  for(var [k, v] of developers) {
    var developer = await loadPage(k);
    saveMap(fil, developer);
    break;
  }
}
module.exports = load;
if(require.main===module) load();
