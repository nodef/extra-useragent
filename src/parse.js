const RKEY = /\/\d|Gecko/;
const RCOM = /^\s*\(|^\w+:\/\/|www\..*?\.|@.*?\./;
const RKEYSEP = /^[^A-Za-z0-9]+$/;
const RURLMAIL = /^\w+:\/\/|@.*?\./;
const RPHONENO = /^\+?[\d\-]+\s*$/;
const RURL = /^\w+:\/\//;
const RMAIL = /@.*?\./;

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
  s = s.replace(/(\d)\s+(\d)/, '$1/$2');
  s = s.replace(/([A-Z]{2,})(\d)|([A-Za-z]{2,})\.(\d)/, '$1$3/$2$4');
  if(RKEY.test(s)) return s;
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

function parseAgent(m) {
  var v = null;
  if(v=m.get('Googlebot')) return 'Googlebot/'+v;
  if(v=m.get('Microsoft Outlook')) return 'Microsoft Outlook/'+v;
  if(v=m.get('Firefox') && !m.has('Seamonkey')) return 'Firefox/'+v;
  if(v=m.get('Seamonkey')) return 'Seamonkey/'+v;
  if(v=m.get('Safari') && !m.has('Chrome') && !m.has('Chromium')) return 'Safari/'+v;
  if(v=m.get('OPR')||m.get('Opera')) return 'Opera/'+v;
  if(v=m.get('Edge')) return 'Edge/'+v;
  if(v=m.get('Trident')||m.get('MSIE')) return 'Internet Explorer/'+v;
  if(v=m.get('Chrome') && !m.has('Chromium')) return 'Chrome/'+v;
  if(v=m.get('Chromium')) return 'Chromium/'+v;
  return null;
}

function parseRenderer(m) {
  var v = null;
  if(v=m.get('NetFront')||m.get('PLAYSTATION 3')) return 'NetFront/'+v;
  if(v=m.get('Gecko')) return 'Gecko/'+v;
  if(v=m.get('Edge')) return 'EdgeHTML/'+v;
  if(v=m.get('AppleWebKit')) return 'WebKit/'+v;
  if(v=m.get('Opera')) return 'Presto/'+v;
  if(v=m.get('Trident')) return 'Trident/'+v;
  if(v=m.get('Chrome')) return 'Blink/'+v;
  return null;
}

function parse(s, i=0) {
  var {keywords, comments, compatible} = scan(s, i);
  var phone = null, url = null, email = null;
  var mobile = false, code = null;
  var agents = new Map();
  for(var p of keywords.concat(comments)) {
    if(RPHONENO.test(p)) phone = p;
    else if(RURL.test(p)) url = p;
    else if(RMAIL.test(p)) email = p;
    else if(/mobi/i.test(p)) mobile = true;
    else if(RKEY.test(p)) {
      var i = p.lastIndexOf('/');
      agents.set(p.slice(0, i), p.slice(i+1));
    }
    else agents.set(p, null);
  }
  var code = parseAgent(agents);
  var renderer = parseRenderer(agents);
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
  return {code, renderer, mobile, url, email, phone, keywords, comments, compatible};
}
module.exports = parse;
