const assert = require('assert');
const ua = require('../');


function parse007ac9Crawler() {
  var a = ua.parse('Mozilla/5.0 (compatible; 007ac9 Crawler; http://crawler.007ac9.net/)');
  assert.equal('Mozilla/5.0', a.compatible);
  assert.equal('007ac9 Crawler', a.code);
  assert.equal('http://crawler.007ac9.net/', a.url);
}

function parse() {
  parse007ac9Crawler();
}
module.exports = parse;
