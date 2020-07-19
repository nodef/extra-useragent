const RKEY = /\/\d|Gecko/;
const RCOM = /^\s*\(|^\w+:\/\/|www\..*?\.|@.*?\./;
const RKEYSEP = /^[^A-Za-z0-9]+$/;
const RURLMAIL = /^\w+:\/\/|@.*?\./;
const RPHONENO = /^\+?[\d\-]+\s*$/;

function joinWords(x, y) {
  return !x || !y? x||y : x+' '+y;
}

function transformKeyword(s) {
  s = s.replace(/^like$/, '');
  if(RPHONENO.test(s)) return s;
  s = s.replace(/^[^A-Za-z0-9?\.]+/, '');
  s = s.replace(/[^A-Za-z0-9?\.]+$/, '');
  s = s.replace(/^www\..*?\..*/, 'http://$&');
  if(RURLMAIL.test(s)) return s;
  s = s.replace(/([A-Za-z]{2,})\.?(\d)/, '$1/$2');
  s = s.replace(/(\/v|-v?|\s+v?|[\W_]*version[\W_]*)(\d)/, '/$2');
  return s;
}

function transformComment(s) {
  s = s.replace(/.*?\(/, '');
  s = s.replace(/\).*/, '');
  s = s.replace(/via\s+\S+/g, '$&;');
  return s.split(/;\s+|\s+[\W_]\s+/g).map(transformKeyword);
}

function scan(s, i=0) {
  var keywords = [], compatible = null;
  var comments = [], key = '', m = null;
  var rsep = /\s+\(?|\s*\(|$/g; rsep.lastIndex = i;
  while(i<s.length && (m=rsep.exec(s))!=null) {
    var txt = s.slice(i, m.index).trim(), I = m.index;
    if(txt[0]==='(') txt = s.slice(i, I = rsep.lastIndex = s.indexOf(')', i)+1);
    if(RCOM.test(txt)) {
      var com = transformComment(txt);
      if(com.includes('compatible')) compatible = key;
      if(key) { keywords.push(key); key = ''; }
      comments.push(...com);
    }
    else {
      if(RKEY.test(key) || (key && RKEYSEP.test(txt))) { keywords.push(key); key = ''; }
      key = transformKeyword(joinWords(key, txt));
    }
    i = I;
  }
  if(key) keywords.push(key);
  return {keywords, comments, compatible};
}

function parse(s, i=0) {
  var {keywords, comments, compatible} = scan(s, i);
  for(var k of keywords.concat(comments)) {
    if(0) 0;
  }
  // agent:
  // - code
  // - name
  // - type
  // - version
  // - capabilities
  // renderer:
  // - code
  // - name
  // - version
  // - capabilities
  // os:
  // - code
  // - name
  // - type
  // - version
  // - capabilities
  // device:
  // - code
  // - name
  // - type
  // - version
  // - capabilities
  // (abilities)
  return scan(s, i);
}
module.exports = scan;
