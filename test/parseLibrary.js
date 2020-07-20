const assert = require('assert');
const ua = require('../');


function parsePythonRequests() {
  var e0 = 'python-requests/2.20.1';
  var l0 = 'python-requests/2.4.3 CPython/3.4.2 Linux/4.9.35+';
  var l1 = 'python-requests/2.7.0 CPython/2.7.3 Linux/3.2.0-98-virtual';
  var l2 = 'python-requests/2.6.0 CPython/2.6.6 Linux/3.10.9-xxxx-grs-ipv6-64';
  var l3 = 'python-requests/1.2.3 CPython/2.7.16 Linux/4.14.165-102.185.amzn1.x86_64';
  var w0 = 'python-requests/2.7.0 CPython/2.7.10 Windows/7';
  var w1 = 'python-requests/2.2.1 CPython/2.7.0 Windows/2008ServerR2';
  var a = ua.parse(e0);
  // assert.equal('python-requests/2.20.1', a.code);
  // assert.equal('Python Requests Library', a.name);
  // assert.equal('application/software-library', a.type);
  // assert.equal('server', a.device);
  // assert.equal('Python', a.extrainfo);
  var a = ua.parse(l0);
  // assert.equal('python-requests/1.2.3', a.code);
}

function parseLibrary() {
  parsePythonRequests();
}
module.exports = parseLibrary;
