const assert = require('assert');
const ua = require('../');


function parsePythonRequests() {
  var a = ua.parse('python-requests/2.20.1');
  // assert.equal('python-requests/2.20.1', a.code);
  // assert.equal('Python Requests Library', a.name);
  // assert.equal('application/software-library', a.type);
  // assert.equal('server', a.device);
  // assert.equal('Python', a.extrainfo);
  var a = ua.parse('python-requests/1.2.3 CPython/2.7.16 Linux/4.14.165-102.185.amzn1.x86_64');
  // assert.equal('python-requests/1.2.3', a.code);
}

function parseLibrary() {
  parsePythonRequests();
}
module.exports = parseLibrary;
